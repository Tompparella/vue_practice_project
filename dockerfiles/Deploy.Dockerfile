FROM node:18-alpine3.17 AS build-stage

WORKDIR /frontend

# Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Install application dependencies
# Loglevel can be set for debugging purposes
# We omit dev to disregard devDependencies. TODO: Add devDependencies when an actual staging environment with testing is done
RUN npm install -loglevel verbose --omit=dev --no-optional

# Copy the rest of your application code
COPY . .

# Build your Vue application. HOX! Build-only, due to no type checking being required in production anymore.
RUN npm run build-only

FROM nginx AS production-stage

COPY --from=build-stage /frontend/dist /usr/share/nginx/html

# Expose the port your Vue app will run on. No need when running compose file with networks

# Command to start your application
CMD [ "nginx", "-g", "daemon off;" ]

# TODO: Under construction!!

