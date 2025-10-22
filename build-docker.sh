#!/bin/bash

# Docker build script for production deployment
# Usage: ./build-docker.sh [OPTIONS]
#
# OPTIONS:
#   -t, --tag       Docker image tag (default: resume:latest)
#   -r, --run       Run the container after building
#   -p, --port      Port to expose (default: 3000)
#   --push          Push to registry after building
#   --registry      Registry URL (e.g., docker.io/username)
#   -h, --help      Show this help message

set -e

# Default values
IMAGE_TAG="resume:latest"
RUN_CONTAINER=false
PORT=3000
PUSH_IMAGE=false
REGISTRY=""

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
Docker build script for production deployment

Usage: ./build-docker.sh [OPTIONS]

OPTIONS:
    -t, --tag TAG       Docker image tag (default: resume:latest)
    -r, --run           Run the container after building
    -p, --port PORT     Port to expose (default: 3000)
    --push              Push to registry after building
    --registry URL      Registry URL (e.g., docker.io/username)
    -h, --help          Show this help message

Examples:
    # Build with default settings
    ./build-docker.sh

    # Build and run immediately
    ./build-docker.sh --run

    # Build with custom tag and port
    ./build-docker.sh -t resume:v1.0.0 -r -p 8080

    # Build and push to registry
    ./build-docker.sh -t myapp:latest --registry docker.io/username --push

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
        -r|--run)
            RUN_CONTAINER=true
            shift
            ;;
        -p|--port)
            PORT="$2"
            shift 2
            ;;
        --push)
            PUSH_IMAGE=true
            shift
            ;;
        --registry)
            REGISTRY="$2"
            shift 2
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

# If registry is specified, prepend it to the image tag
if [ -n "$REGISTRY" ]; then
    FULL_IMAGE_TAG="${REGISTRY}/${IMAGE_TAG}"
else
    FULL_IMAGE_TAG="$IMAGE_TAG"
fi

print_info "Starting Docker build process..."
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker daemon is running
if ! docker info &> /dev/null; then
    print_error "Docker daemon is not running. Please start Docker."
    exit 1
fi

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

print_info "Building Docker image: ${FULL_IMAGE_TAG}"
echo ""

# Build the Docker image
if docker build -t "$FULL_IMAGE_TAG" "$SCRIPT_DIR"; then
    print_success "Docker image built successfully!"
    echo ""
    
    # Show image details
    print_info "Image details:"
    docker images "$FULL_IMAGE_TAG" --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}"
    echo ""
else
    print_error "Docker build failed!"
    exit 1
fi

# Push to registry if requested
if [ "$PUSH_IMAGE" = true ]; then
    if [ -z "$REGISTRY" ]; then
        print_warning "No registry specified. Skipping push."
    else
        print_info "Pushing image to registry..."
        if docker push "$FULL_IMAGE_TAG"; then
            print_success "Image pushed successfully!"
            echo ""
        else
            print_error "Failed to push image!"
            exit 1
        fi
    fi
fi

# Run the container if requested
if [ "$RUN_CONTAINER" = true ]; then
    CONTAINER_NAME="resume-app"
    
    # Stop and remove existing container if it exists
    if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        print_info "Stopping and removing existing container..."
        docker stop "$CONTAINER_NAME" &> /dev/null || true
        docker rm "$CONTAINER_NAME" &> /dev/null || true
    fi
    
    print_info "Starting container on port ${PORT}..."
    
    if docker run -d \
        --name "$CONTAINER_NAME" \
        -p "${PORT}:3000" \
        --restart unless-stopped \
        "$FULL_IMAGE_TAG"; then
        
        print_success "Container started successfully!"
        echo ""
        print_info "Container name: ${CONTAINER_NAME}"
        print_info "Access the application at: http://localhost:${PORT}"
        echo ""
        print_info "Useful commands:"
        echo "  • View logs:        docker logs -f ${CONTAINER_NAME}"
        echo "  • Stop container:   docker stop ${CONTAINER_NAME}"
        echo "  • Remove container: docker rm ${CONTAINER_NAME}"
        echo ""
    else
        print_error "Failed to start container!"
        exit 1
    fi
else
    print_info "Build complete! To run the container, use:"
    echo "  docker run -d -p ${PORT}:3000 --name resume-app ${FULL_IMAGE_TAG}"
    echo ""
fi

print_success "All done! 🚀"

