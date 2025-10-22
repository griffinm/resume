# Docker Deployment Guide

This guide explains how to build and deploy the resume application using Docker.

## Prerequisites

- Docker installed on your system
- Docker daemon running

## Quick Start

### Option 1: Using the Build Script (Recommended)

The `build-docker.sh` script provides an easy way to build and run your Docker container:

```bash
# Build the Docker image
./build-docker.sh

# Build and run immediately
./build-docker.sh --run

# Build with custom tag and port
./build-docker.sh -t resume:v1.0.0 -r -p 8080

# Build and push to a registry
./build-docker.sh -t resume:latest --registry docker.io/yourusername --push
```

**Script Options:**
- `-t, --tag TAG`: Docker image tag (default: `resume:latest`)
- `-r, --run`: Run the container after building
- `-p, --port PORT`: Port to expose (default: 3000)
- `--push`: Push to registry after building
- `--registry URL`: Registry URL (e.g., `docker.io/username`)
- `-h, --help`: Show help message

### Option 2: Using Docker Compose

Build and run using Docker Compose:

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option 3: Manual Docker Commands

Build the image:
```bash
docker build -t resume:latest .
```

Run the container:
```bash
docker run -d \
  --name resume-app \
  -p 3000:3000 \
  --restart unless-stopped \
  resume:latest
```

## Accessing the Application

Once running, access your resume at:
- **Local**: http://localhost:3000
- **Production**: http://your-server-ip:3000

## Common Commands

### Container Management
```bash
# View running containers
docker ps

# View all containers
docker ps -a

# View logs
docker logs -f resume-app

# Stop the container
docker stop resume-app

# Start the container
docker start resume-app

# Remove the container
docker rm resume-app

# Restart the container
docker restart resume-app
```

### Image Management
```bash
# List images
docker images

# Remove image
docker rmi resume:latest

# Tag image for registry
docker tag resume:latest yourusername/resume:latest

# Push to registry
docker push yourusername/resume:latest
```

## Production Deployment

### 1. Build for Production

```bash
./build-docker.sh -t resume:prod
```

### 2. Tag and Push to Registry

```bash
# Docker Hub
docker tag resume:prod yourusername/resume:latest
docker push yourusername/resume:latest

# Using the script
./build-docker.sh -t resume:latest --registry docker.io/yourusername --push
```

### 3. Deploy on Production Server

On your production server:

```bash
# Pull the image
docker pull yourusername/resume:latest

# Run the container
docker run -d \
  --name resume-app \
  -p 80:3000 \
  --restart always \
  yourusername/resume:latest
```

Or using Docker Compose:

```bash
# Create docker-compose.yml on the server
docker-compose up -d
```

## Docker Image Architecture

The Dockerfile uses a multi-stage build process for optimal size and security:

1. **Dependencies Stage**: Installs Node.js dependencies
2. **Builder Stage**: Builds the Next.js application
3. **Runner Stage**: Creates a minimal runtime image with only production assets

**Benefits:**
- Smaller final image size (~200MB vs ~1GB)
- Improved security (no build tools in production)
- Faster deployment and startup times
- Runs as non-root user

## Environment Variables

You can customize the container behavior with environment variables:

```bash
docker run -d \
  --name resume-app \
  -p 3000:3000 \
  -e NODE_ENV=production \
  -e HOSTNAME=0.0.0.0 \
  resume:latest
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker logs resume-app

# Check if port is already in use
sudo lsof -i :3000
```

### Build fails
```bash
# Clean Docker cache
docker builder prune

# Rebuild without cache
docker build --no-cache -t resume:latest .
```

### Permission issues
```bash
# Make sure the build script is executable
chmod +x build-docker.sh
```

## Health Checks

The Docker Compose configuration includes health checks. Monitor them with:

```bash
docker-compose ps
```

## Resource Management

### Limit container resources:
```bash
docker run -d \
  --name resume-app \
  -p 3000:3000 \
  --memory="512m" \
  --cpus="1" \
  resume:latest
```

## Updating the Application

1. Pull latest code changes
2. Rebuild the image:
   ```bash
   ./build-docker.sh -t resume:latest
   ```
3. Stop and remove old container:
   ```bash
   docker stop resume-app && docker rm resume-app
   ```
4. Start new container:
   ```bash
   ./build-docker.sh -r
   ```

Or with Docker Compose:
```bash
docker-compose down
docker-compose up -d --build
```

## Security Best Practices

✅ The Docker setup includes:
- Non-root user execution
- Multi-stage builds (no build tools in production)
- Minimal base image (Alpine Linux)
- .dockerignore to exclude sensitive files
- Production-only dependencies

## Support

For issues or questions, please refer to the main README.md or open an issue in the repository.

