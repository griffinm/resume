#!/bin/bash

# Docker Compose deployment script
# Usage: ./deploy.sh [COMMAND] [OPTIONS]
#
# COMMANDS:
#   up          Build and start services (default)
#   down        Stop and remove services
#   restart     Restart services
#   logs        View service logs
#   status      Show service status
#   build       Build or rebuild services
#   stop        Stop services without removing
#   start       Start existing services
#   -h, --help  Show this help message

set -e

# Default values
COMMAND="up"
BUILD_FLAG="--build"
DETACH_FLAG="-d"

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
Docker Compose deployment script for resume application

Usage: ./deploy.sh [COMMAND] [OPTIONS]

COMMANDS:
    up          Build and start services (default)
    down        Stop and remove services
    restart     Restart services
    logs        View service logs (follow mode)
    status      Show service status
    build       Build or rebuild services without starting
    stop        Stop services without removing
    start       Start existing services
    -h, --help  Show this help message

OPTIONS:
    --no-build  Skip building images (only for 'up' command)
    --no-detach Run in foreground (only for 'up' command)

Examples:
    # Deploy application (build and start)
    ./deploy.sh

    # Deploy with explicit up command
    ./deploy.sh up

    # Start without rebuilding
    ./deploy.sh up --no-build

    # Stop and remove all services
    ./deploy.sh down

    # Restart services
    ./deploy.sh restart

    # View logs
    ./deploy.sh logs

    # Check service status
    ./deploy.sh status

    # Rebuild images
    ./deploy.sh build

EOF
    exit 0
}

# Parse command line arguments
if [[ $# -gt 0 ]]; then
    case $1 in
        up|down|restart|logs|status|build|stop|start)
            COMMAND="$1"
            shift
            ;;
        -h|--help)
            show_help
            ;;
        --*)
            # If it starts with --, it's an option for the default 'up' command
            ;;
        *)
            print_error "Unknown command: $1"
            echo "Use -h or --help for usage information"
            exit 1
            ;;
    esac
fi

# Parse options
while [[ $# -gt 0 ]]; do
    case $1 in
        --no-build)
            BUILD_FLAG=""
            shift
            ;;
        --no-detach)
            DETACH_FLAG=""
            shift
            ;;
        *)
            print_error "Unknown option: $1"
            echo "Use -h or --help for usage information"
            exit 1
            ;;
    esac
done

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

print_info "Starting deployment process..."
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

print_success "Prerequisites check passed"
echo ""

# Ensure the prod network exists
print_info "Checking for 'prod' network..."
if ! docker network inspect prod &> /dev/null; then
    print_warning "Network 'prod' does not exist. Creating it..."
    if docker network create prod; then
        print_success "Network 'prod' created successfully"
    else
        print_error "Failed to create network 'prod'"
        exit 1
    fi
else
    print_success "Network 'prod' exists"
fi
echo ""

# Execute the requested command
case $COMMAND in
    up)
        print_info "Building and starting services..."
        if [ -n "$BUILD_FLAG" ]; then
            print_info "Build flag is set - images will be rebuilt"
        fi
        echo ""
        
        if docker compose up $BUILD_FLAG $DETACH_FLAG; then
            print_success "Services started successfully!"
            echo ""
            print_info "Application is running at: http://localhost:10100"
            echo ""
            print_info "Useful commands:"
            echo "  • View logs:        ./deploy.sh logs"
            echo "  • Check status:     ./deploy.sh status"
            echo "  • Restart services: ./deploy.sh restart"
            echo "  • Stop services:    ./deploy.sh down"
            echo ""
        else
            print_error "Failed to start services!"
            exit 1
        fi
        ;;
    
    down)
        print_info "Stopping and removing services..."
        echo ""
        
        if docker compose down; then
            print_success "Services stopped and removed successfully!"
            echo ""
        else
            print_error "Failed to stop services!"
            exit 1
        fi
        ;;
    
    restart)
        print_info "Restarting services..."
        echo ""
        
        if docker compose restart; then
            print_success "Services restarted successfully!"
            echo ""
            print_info "Application is running at: http://localhost:10100"
            echo ""
        else
            print_error "Failed to restart services!"
            exit 1
        fi
        ;;
    
    logs)
        print_info "Viewing service logs (Ctrl+C to exit)..."
        echo ""
        docker compose logs -f
        ;;
    
    status)
        print_info "Service status:"
        echo ""
        docker compose ps
        echo ""
        
        # Show additional container details if service is running
        if docker compose ps | grep -q "Up"; then
            print_success "Service is running"
            print_info "Application is accessible at: http://localhost:10100"
        else
            print_warning "Service is not running"
        fi
        echo ""
        ;;
    
    build)
        print_info "Building services..."
        echo ""
        
        if docker compose build; then
            print_success "Services built successfully!"
            echo ""
            print_info "To start services, run: ./deploy.sh up --no-build"
            echo ""
        else
            print_error "Failed to build services!"
            exit 1
        fi
        ;;
    
    stop)
        print_info "Stopping services..."
        echo ""
        
        if docker compose stop; then
            print_success "Services stopped successfully!"
            echo ""
            print_info "To start services again, run: ./deploy.sh start"
            echo ""
        else
            print_error "Failed to stop services!"
            exit 1
        fi
        ;;
    
    start)
        print_info "Starting existing services..."
        echo ""
        
        if docker compose start; then
            print_success "Services started successfully!"
            echo ""
            print_info "Application is running at: http://localhost:10100"
            echo ""
        else
            print_error "Failed to start services!"
            exit 1
        fi
        ;;
esac

print_success "All done! 🚀"

