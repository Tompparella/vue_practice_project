FROM node:18-alpine3.17 AS build-stage

WORKDIR /frontend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your Vue application
RUN npm run build

FROM nginx AS production-stage

COPY --from=build-stage /frontend/dist /usr/share/nginx/html

# Expose the port your Vue app will run on. No need when running compose file with networks
# EXPOSE 8000

# Command to start your application
CMD [ "nginx", "-g", "daemon off;" ]

# TODO: Under construction!!

