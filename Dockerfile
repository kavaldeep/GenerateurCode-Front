# Base image
FROM node:14.17.0 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Production image
FROM nginx:1.21.1-alpine

# Copy build output from the build stage to the nginx web root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
