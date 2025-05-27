# ./Todo_compose/backend/Dockerfile
# FROM node:18.9.1

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 5000

# CMD ["npm", "start"]
FROM node:18.9.1

# Set working directory
WORKDIR /app

# Copy only package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the port (optional in K8s but good for reference)
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
