#!/bin/bash

# Build and push Docker image to Docker registry with auto-incrementing version
# Usage: ./build-and-push.sh

set -e

# Configuration
REGISTRY="nas.malfin.com:10100"
REPOSITORY="resume"
VERSION_FILE="version.txt"

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

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

print_info "Docker Build and Push with Auto-Versioning"
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

if [ ! -f "Dockerfile" ]; then
    print_error "Dockerfile not found in current directory!"
    exit 1
fi

if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

print_success "Prerequisites check passed"
echo ""

# Check if current branch is main
print_info "Checking git branch..."
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
if [ "$CURRENT_BRANCH" != "main" ]; then
    print_error "Current branch is '$CURRENT_BRANCH', not 'main'. Switch to main branch first."
    exit 1
fi
print_success "On main branch"
echo ""

# Check for uncommitted changes
print_info "Checking for uncommitted changes..."
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
    print_error "Uncommitted local changes detected. Commit or stash changes first."
    print_info "Run 'git status' to see uncommitted changes."
    exit 1
fi
print_success "No uncommitted changes"
echo ""

# Read and increment version
print_info "Managing version..."
if [ ! -f "$VERSION_FILE" ]; then
    print_error "Version file '$VERSION_FILE' not found!"
    exit 1
fi

CURRENT_VERSION=$(cat "$VERSION_FILE")
if ! [[ "$CURRENT_VERSION" =~ ^[0-9]+$ ]]; then
    print_error "Invalid version number in $VERSION_FILE: '$CURRENT_VERSION'"
    exit 1
fi

NEW_VERSION=$((CURRENT_VERSION + 1))
echo "$NEW_VERSION" > "$VERSION_FILE"

print_info "Version: $CURRENT_VERSION → $NEW_VERSION"
echo ""

# Get git short hash
GIT_SHORT_HASH=$(git rev-parse --short HEAD 2>/dev/null)

# Create version tag
VERSION_TAG="${GIT_SHORT_HASH}-${NEW_VERSION}"

# Construct full image names
LOCAL_IMAGE="${REPOSITORY}:${VERSION_TAG}"
REMOTE_IMAGE="${REGISTRY}/${REPOSITORY}:${VERSION_TAG}"
REMOTE_IMAGE_LATEST="${REGISTRY}/${REPOSITORY}:latest"

print_info "Image Tag:    ${VERSION_TAG}"
print_info "Git Hash:     ${GIT_SHORT_HASH}"
print_info "Version:      ${NEW_VERSION}"
echo ""
print_info "Local Image:  ${LOCAL_IMAGE}"
print_info "Remote Image: ${REMOTE_IMAGE}"
print_info "Remote Image: ${REMOTE_IMAGE_LATEST}"
echo ""

# Build the Docker image
print_info "Building Docker image..."
echo ""

BUILD_CMD="docker build -t ${LOCAL_IMAGE} ."
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
    # Revert version on build failure
    echo "$CURRENT_VERSION" > "$VERSION_FILE"
    print_info "Version reverted to $CURRENT_VERSION"
    exit 1
fi

# Tag image for registry (version tag)
print_info "Tagging image for registry..."
if docker tag "${LOCAL_IMAGE}" "${REMOTE_IMAGE}"; then
    print_success "Image tagged with version: ${VERSION_TAG}"
else
    print_error "Failed to tag image!"
    # Revert version on tag failure
    echo "$CURRENT_VERSION" > "$VERSION_FILE"
    print_info "Version reverted to $CURRENT_VERSION"
    exit 1
fi

# Tag image as latest
if docker tag "${LOCAL_IMAGE}" "${REMOTE_IMAGE_LATEST}"; then
    print_success "Image tagged as latest"
    echo ""
else
    print_error "Failed to tag image as latest!"
    # Revert version on tag failure
    echo "$CURRENT_VERSION" > "$VERSION_FILE"
    print_info "Version reverted to $CURRENT_VERSION"
    exit 1
fi

# Push to registry (version tag)
print_info "Pushing versioned image to registry..."
print_info "This may take a few minutes depending on image size and network speed..."
echo ""

if docker push "${REMOTE_IMAGE}"; then
    print_success "Versioned image pushed to registry successfully!"
    echo ""
else
    print_error "Failed to push versioned image to registry!"
    print_info "Make sure you're authenticated with: docker login ${REGISTRY}"
    # Revert version on push failure
    echo "$CURRENT_VERSION" > "$VERSION_FILE"
    print_info "Version reverted to $CURRENT_VERSION"
    exit 1
fi

# Push latest tag
print_info "Pushing latest tag to registry..."
echo ""

if docker push "${REMOTE_IMAGE_LATEST}"; then
    print_success "Latest tag pushed to registry successfully!"
    echo ""
else
    print_error "Failed to push latest tag to registry!"
    print_info "Make sure you're authenticated with: docker login ${REGISTRY}"
    # Note: We don't revert version here since the versioned tag was already pushed
    exit 1
fi

print_info "Images pushed:"
echo "  ${REMOTE_IMAGE}"
echo "  ${REMOTE_IMAGE_LATEST}"
echo ""
print_info "To pull this image:"
echo "  docker pull ${REMOTE_IMAGE}"
echo "  docker pull ${REMOTE_IMAGE_LATEST}"
echo ""

print_success "All done! 🚀"
print_info "Version file updated to: $NEW_VERSION"

