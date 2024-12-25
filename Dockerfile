# Use Node.js base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy static files from the 'out' directory to the container
COPY out/ .

# Install the `serve` package globally
RUN npm install -g serve

# Set environment variable for PORT
ENV PORT=8080
EXPOSE ${PORT}

# Command to serve the static files
CMD ["sh", "-c", "serve -s -l ${PORT} /app"]