# Use an official Node.js runtime as a parent image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json, then install dependencies
COPY package*.json ./
# Copy the rest of the app's source code
COPY . .

RUN npm install && npm run build

# Expose the port that the React app is listening on
EXPOSE 3000

# Run the React app
CMD ["npm", "start"]
