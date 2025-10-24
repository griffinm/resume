#!/bin/bash

# Build and push Docker image to AWS ECR and optionally deploy to Kubernetes
# Usage: ./build-and-push-ecr.sh [OPTIONS]
#
# OPTIONS:
#   -t, --tag TAG     Image tag (default: git short hash)
#   --no-cache        Build without using cache
#   --build-only      Only build, don't push
#   --push-only       Only push (skip build)
#   --deploy          Deploy to Kubernetes after push
#   -h, --help        Show this help message

set -e

# Configuration
ECR_REGISTRY="041825629273.dkr.ecr.us-east-1.amazonaws.com"
ECR_REPOSITORY="griffinmahoney-com/resume"
AWS_REGION="us-east-1"
K8S_MANIFEST="k8s/deployment.yaml"
K8S_NAMESPACE="prod"
K8S_DEPLOYMENT="resume"

# Get git short hash for default tag
GIT_SHORT_HASH=$(git rev-parse --short HEAD 2>/dev/null || echo "latest")

# Default values
IMAGE_TAG="${GIT_SHORT_HASH}"
NO_CACHE=""
BUILD_ONLY=false
PUSH_ONLY=false
DEPLOY_K8S=false

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Function to show help
show_help() {
    cat << EOF
Build and push Docker image to AWS ECR and optionally deploy to Kubernetes

Usage: ./build-and-push-ecr.sh [OPTIONS]

OPTIONS:
    -t, --tag TAG     Image tag (default: git short hash)
    --no-cache        Build without using cache
    --build-only      Only build, don't push to ECR
    --push-only       Only push to ECR (skip build)
    --deploy          Deploy to Kubernetes after push
    -h, --help        Show this help message

Configuration:
    ECR Registry:      ${ECR_REGISTRY}
    ECR Repository:    ${ECR_REPOSITORY}
    AWS Region:        ${AWS_REGION}
    Default Tag:       ${GIT_SHORT_HASH}
    K8s Manifest:      ${K8S_MANIFEST}
    K8s Namespace:     ${K8S_NAMESPACE}
    K8s Deployment:    ${K8S_DEPLOYMENT}

Examples:
    # Build, push, and deploy to Kubernetes (full pipeline)
    ./build-and-push-ecr.sh --deploy

    # Build and push with default tag (git short hash)
    ./build-and-push-ecr.sh

    # Build, push with custom tag and deploy
    ./build-and-push-ecr.sh -t v1.2.3 --deploy

    # Build and push with 'latest' tag
    ./build-and-push-ecr.sh -t latest

    # Build without cache, push, and deploy
    ./build-and-push-ecr.sh --no-cache --deploy

    # Only build locally, don't push
    ./build-and-push-ecr.sh --build-only

    # Only push existing image and deploy
    ./build-and-push-ecr.sh --push-only --deploy -t v1.2.3

Prerequisites:
    - Docker must be running
    - AWS CLI must be installed and configured
    - Appropriate AWS credentials with ECR permissions
    - Git repository (for default tag)
    - kubectl installed and configured (for --deploy)

EOF
    exit 0
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -t|--tag)
            IMAGE_TAG="$2"
            shift 2
            ;;
        --no-cache)
            NO_CACHE="--no-cache"
            shift
            ;;
        --build-only)
            BUILD_ONLY=true
            shift
            ;;
        --push-only)
            PUSH_ONLY=true
            shift
            ;;
        --deploy)
            DEPLOY_K8S=true
            shift
            ;;
        -h|--help)
            show_help
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use -h or --help for usage information"
            exit 1
            ;;
    esac
done

# Construct full image names
LOCAL_IMAGE="${ECR_REPOSITORY}:${IMAGE_TAG}"
ECR_IMAGE="${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}"

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

print_info "Docker Build and Push to ECR"
echo ""
print_info "Local Image: ${LOCAL_IMAGE}"
print_info "ECR Image:   ${ECR_IMAGE}"
echo ""

# Check prerequisites
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

if ! docker info &> /dev/null; then
    print_error "Docker daemon is not running. Please start Docker."
    exit 1
fi

if ! command -v aws &> /dev/null; then
    print_error "AWS CLI is not installed. Please install AWS CLI first."
    exit 1
fi

if [ ! -f "Dockerfile" ]; then
    print_error "Dockerfile not found in current directory!"
    exit 1
fi

print_success "Prerequisites check passed"
echo ""

# Build the Docker image
if [ "$PUSH_ONLY" = false ]; then
    print_info "Building Docker image..."
    echo ""
    
    BUILD_CMD="docker build ${NO_CACHE} -t ${LOCAL_IMAGE} ."
    print_info "Running: ${BUILD_CMD}"
    echo ""
    
    if eval "${BUILD_CMD}"; then
        print_success "Docker image built successfully!"
        echo ""
        
        # Show image details
        print_info "Image details:"
        docker images "${LOCAL_IMAGE}" --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}"
        echo ""
    else
        print_error "Docker build failed!"
        exit 1
    fi
else
    print_info "Skipping build (--push-only specified)"
    echo ""
    
    # Check if local image exists
    if ! docker images "${LOCAL_IMAGE}" --format "{{.Repository}}:{{.Tag}}" | grep -q "${LOCAL_IMAGE}"; then
        print_error "Local image '${LOCAL_IMAGE}' not found!"
        print_info "Remove --push-only flag to build the image first."
        exit 1
    fi
fi

# Push to ECR
if [ "$BUILD_ONLY" = false ]; then
    print_info "Authenticating with ECR..."
    
    if aws ecr get-login-password --region "${AWS_REGION}" | docker login --username AWS --password-stdin "${ECR_REGISTRY}" 2>&1; then
        print_success "Successfully authenticated with ECR"
        echo ""
    else
        print_error "ECR authentication failed!"
        print_info "Make sure your AWS credentials are configured correctly."
        exit 1
    fi
    
    print_info "Tagging image for ECR..."
    if docker tag "${LOCAL_IMAGE}" "${ECR_IMAGE}"; then
        print_success "Image tagged successfully!"
        echo ""
    else
        print_error "Failed to tag image!"
        exit 1
    fi
    
    print_info "Pushing image to ECR..."
    print_info "This may take a few minutes depending on image size and network speed..."
    echo ""
    
    if docker push "${ECR_IMAGE}"; then
        print_success "Image pushed to ECR successfully!"
        echo ""
        print_info "Image URI: ${ECR_IMAGE}"
        echo ""
        print_info "To pull this image:"
        echo "  docker pull ${ECR_IMAGE}"
        echo ""
    else
        print_error "Failed to push image to ECR!"
        print_info "Check your AWS permissions and try again."
        exit 1
    fi
else
    print_info "Skipping push to ECR (--build-only specified)"
    echo ""
    print_info "To push this image to ECR later, run:"
    echo "  ./build-and-push-ecr.sh --push-only -t ${IMAGE_TAG}"
    echo ""
fi

# Deploy to Kubernetes
if [ "$DEPLOY_K8S" = true ]; then
    if [ "$BUILD_ONLY" = true ]; then
        print_warning "Cannot deploy with --build-only flag. Image must be pushed to ECR first."
        echo ""
    else
        print_info "Deploying to Kubernetes..."
        echo ""
        
        # Check if kubectl is installed
        if ! command -v kubectl &> /dev/null; then
            print_error "kubectl is not installed. Please install kubectl first."
            exit 1
        fi
        
        # Check if manifest exists
        if [ ! -f "${K8S_MANIFEST}" ]; then
            print_error "Kubernetes manifest not found: ${K8S_MANIFEST}"
            exit 1
        fi
        
        # Configure ECR pull secret
        print_info "Configuring ECR pull secret in Kubernetes..."
        
        # Extract AWS account ID from ECR registry
        AWS_ACCOUNT_ID=$(echo "${ECR_REGISTRY}" | cut -d'.' -f1)
        
        # Delete existing secret if it exists
        kubectl -n ${K8S_NAMESPACE} delete secret ecr-creds --ignore-not-found
        
        # Create new ECR pull secret
        print_info "Creating ECR credentials secret..."
        if kubectl -n ${K8S_NAMESPACE} create secret docker-registry ecr-creds \
            --docker-server=${ECR_REGISTRY} \
            --docker-username=AWS \
            --docker-password="$(aws ecr get-login-password --region ${AWS_REGION})"; then
            print_success "ECR credentials secret created!"
        else
            print_error "Failed to create ECR credentials secret!"
            exit 1
        fi
        
        # Patch the default service account to use the pull secret
        print_info "Configuring service account to use ECR credentials..."
        if kubectl -n ${K8S_NAMESPACE} patch serviceaccount default \
            -p '{"imagePullSecrets":[{"name":"ecr-creds"}]}'; then
            print_success "Service account configured!"
            echo ""
        else
            print_warning "Failed to patch service account (may already be configured)"
            echo ""
        fi
        
        print_info "Updating deployment image to: ${ECR_IMAGE}"
        
        # Update the image in the deployment
        if kubectl set image deployment/${K8S_DEPLOYMENT} ${K8S_DEPLOYMENT}=${ECR_IMAGE} -n ${K8S_NAMESPACE}; then
            print_success "Deployment image updated!"
            echo ""
        else
            print_error "Failed to update deployment image!"
            exit 1
        fi
        
        # Wait for rollout to complete
        print_info "Waiting for rollout to complete..."
        if kubectl rollout status deployment/${K8S_DEPLOYMENT} -n ${K8S_NAMESPACE} --timeout=5m; then
            print_success "Deployment rolled out successfully!"
            echo ""
            
            # Show deployment status
            print_info "Deployment status:"
            kubectl get deployment ${K8S_DEPLOYMENT} -n ${K8S_NAMESPACE}
            echo ""
            
            print_info "Pod status:"
            kubectl get pods -n ${K8S_NAMESPACE} -l app=${K8S_DEPLOYMENT}
            echo ""
        else
            print_error "Deployment rollout failed or timed out!"
            print_warning "Check the deployment status with:"
            echo "  kubectl rollout status deployment/${K8S_DEPLOYMENT} -n ${K8S_NAMESPACE}"
            echo "  kubectl get pods -n ${K8S_NAMESPACE} -l app=${K8S_DEPLOYMENT}"
            echo ""
            exit 1
        fi
    fi
else
    if [ "$BUILD_ONLY" = false ]; then
        print_info "To deploy to Kubernetes, run:"
        echo "  ./build-and-push-ecr.sh --push-only --deploy -t ${IMAGE_TAG}"
        echo ""
    fi
fi

print_success "All done! 🚀"

