FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install
# Copy the rest of the application code
COPY . .
RUN npm run build
# Expose the port the app runs on
EXPOSE 3000
# Start the application
CMD ["npm", "start"]