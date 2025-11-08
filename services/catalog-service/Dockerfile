# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the service code
COPY . .

# Expose the service port
EXPOSE 3003

# Start the service
CMD ["npm", "start"]
