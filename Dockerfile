FROM node:14

WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your Vue application
RUN npm run build

# Expose the port your Vue app will run on (typically 80 for production)
EXPOSE 80

# Command to start your application
CMD [ "npm", "start" ]

# TODO: Under construction!!