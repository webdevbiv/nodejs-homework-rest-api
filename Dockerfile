# https://hub.docker.com/r/webdevbiv/goit

# Use an official Node.js runtime as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose a port (optional, if your application needs to listen on a specific port)
EXPOSE 6000

# Start the application
CMD ["npm", "start"]


