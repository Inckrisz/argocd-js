# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose the app port (App A uses 3000, App B uses 4000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
