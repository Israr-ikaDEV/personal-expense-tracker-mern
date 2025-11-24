# backend/Dockerfile

# Use a standard Node.js image as the base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies (for caching efficiency)
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run the application (using 'npm start')
CMD ["npm", "start"]