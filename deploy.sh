#!/bin/bash

# Docker Compose build and push to ECR script
# Usage: ./deploy.sh [COMMAND] [OPTIONS]
#
# COMMANDS:
#   deploy      Build and push to ECR (default)
#   build       Build images only
#   push        Push existing images to ECR
#   -h, --help  Show this help message

set -e

# Default values
COMMAND="deploy"
LOCAL_IMAGE="griffinmahoney-com/resume:latest"
ECR_REGISTRY="041825629273.dkr.ecr.us-east-1.amazonaws.com"
ECR_IMAGE="${ECR_REGISTRY}/griffinmahoney-com/resume:latest"
AWS_REGION="us-east-1"

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
Docker Compose build and push to ECR script for resume application

Usage: ./deploy.sh [COMMAND] [OPTIONS]

COMMANDS:
    deploy      Build and push to ECR (default)
    build       Build images only without pushing
    push        Push existing images to ECR without building
    -h, --help  Show this help message

Configuration:
    Local Image:  ${LOCAL_IMAGE}
    ECR Registry: ${ECR_REGISTRY}
    ECR Image:    ${ECR_IMAGE}
    AWS Region:   ${AWS_REGION}

Examples:
    # Build and push to ECR (default)
    ./deploy.sh

    # Build and push with explicit command
    ./deploy.sh deploy

    # Build images only
    ./deploy.sh build

    # Push existing images
    ./deploy.sh push

Prerequisites:
    - AWS CLI must be installed and configured
    - Docker must be running
    - You must be authenticated with ECR (run: aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY})

EOF
    exit 0
}

# Parse command line arguments
if [[ $# -gt 0 ]]; then
    case $1 in
        deploy|build|push)
            COMMAND="$1"
            shift
            ;;
        -h|--help)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            echo "Use -h or --help for usage information"
            exit 1
            ;;
    esac
fi

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

print_info "Starting ECR deployment process..."
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is available
if ! docker compose version &> /dev/null; then
    print_error "Docker Compose is not available. Please install Docker Compose."
    exit 1
fi

# Check if Docker daemon is running
if ! docker info &> /dev/null; then
    print_error "Docker daemon is not running. Please start Docker."
    exit 1
fi

# Check if docker-compose.yml exists
if [ ! -f "docker-compose.yml" ]; then
    print_error "docker-compose.yml not found in current directory!"
    exit 1
fi

# Check if AWS CLI is installed (for ECR authentication)
if ! command -v aws &> /dev/null; then
    print_warning "AWS CLI is not installed. Make sure you're authenticated with ECR manually."
else
    print_success "AWS CLI found"
fi

print_success "Prerequisites check passed"
echo ""

# Function to build images
build_images() {
    print_info "Building Docker images with docker-compose..."
    echo ""
    
    if docker compose build; then
        print_success "Docker images built successfully!"
        echo ""
        
        # Show image details
        print_info "Image details:"
        docker images "${LOCAL_IMAGE}" --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}"
        echo ""
        return 0
    else
        print_error "Failed to build Docker images!"
        return 1
    fi
}

# Function to tag and push to ECR
push_to_ecr() {
    print_info "Checking ECR authentication..."
    
    # Try to authenticate with ECR
    if command -v aws &> /dev/null; then
        print_info "Logging in to ECR..."
        if aws ecr get-login-password --region "${AWS_REGION}" | docker login --username AWS --password-stdin "${ECR_REGISTRY}" &> /dev/null; then
            print_success "Successfully authenticated with ECR"
        else
            print_warning "ECR authentication failed. Attempting to push anyway..."
        fi
    else
        print_warning "AWS CLI not found. Assuming you're already authenticated with ECR..."
    fi
    echo ""
    
    # Check if local image exists
    if ! docker images "${LOCAL_IMAGE}" --format "{{.Repository}}:{{.Tag}}" | grep -q "${LOCAL_IMAGE}"; then
        print_error "Local image '${LOCAL_IMAGE}' not found!"
        print_info "Run './deploy.sh build' first to build the image."
        return 1
    fi
    
    print_info "Tagging image for ECR..."
    print_info "  Source: ${LOCAL_IMAGE}"
    print_info "  Target: ${ECR_IMAGE}"
    echo ""
    
    if docker tag "${LOCAL_IMAGE}" "${ECR_IMAGE}"; then
        print_success "Image tagged successfully!"
        echo ""
    else
        print_error "Failed to tag image!"
        return 1
    fi
    
    print_info "Pushing image to ECR..."
    print_info "This may take a few minutes depending on image size and network speed..."
    echo ""
    
    if docker push "${ECR_IMAGE}"; then
        print_success "Image pushed to ECR successfully!"
        echo ""
        print_info "Image location: ${ECR_IMAGE}"
        echo ""
        return 0
    else
        print_error "Failed to push image to ECR!"
        print_info "Make sure you're authenticated with ECR. Try running:"
        echo "  aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}"
        echo ""
        return 1
    fi
}

# Execute the requested command
case $COMMAND in
    deploy)
        print_info "Running full deployment: build + push to ECR"
        echo ""
        
        if build_images; then
            if push_to_ecr; then
                print_success "Deployment completed successfully!"
                echo ""
                print_info "Next steps:"
                echo "  • Pull image on server: docker pull ${ECR_IMAGE}"
                echo "  • Or use docker-compose on server with the ECR image"
                echo ""
            else
                exit 1
            fi
        else
            exit 1
        fi
        ;;
    
    build)
        if build_images; then
            print_info "Build completed. To push to ECR, run: ./deploy.sh push"
            echo ""
        else
            exit 1
        fi
        ;;
    
    push)
        if push_to_ecr; then
            print_info "Push completed successfully!"
            echo ""
        else
            exit 1
        fi
        ;;
esac

print_success "All done! 🚀"

