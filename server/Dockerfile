# Use official Node.js Alpine image as a lightweight base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies (npm packages) inside the container
RUN npm install

# Copy the rest of the server source code into the container
COPY . .

# Expose port 3000 for the Express server
EXPOSE 3000

# Run the server in development mode using nodemon
CMD ["npm", "run", "dev"]
