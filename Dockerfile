# Stage 1: Build
FROM node:lts-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app and export static files
RUN npm run build


# Stage 2: Runtime
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the exported static files from the build stage
COPY --from=builder /app/out /app

# Install the `serve` package globally
RUN npm install -g serve

# Set environment variable for PORT
ENV PORT=8080
EXPOSE ${PORT}

# Command to serve the static files
CMD ["sh", "-c", "serve -s -l ${PORT} /app"]🐳