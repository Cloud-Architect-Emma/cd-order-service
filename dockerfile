# Use Node.js 16 Alpine as a lightweight base image
FROM node:16-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY src/ ./src/

# Expose application port
EXPOSE 1000

# Start the application
CMD ["node", "src/app.js"]

