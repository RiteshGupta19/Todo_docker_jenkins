# ./Todo_compose/frontend/Dockerfile
FROM node:18.9.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Step 1: Build the React/Vite app
# FROM node:18.9.1 AS build

# WORKDIR /app

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy source code and build the production version
# COPY . .
# RUN npm run build

# # Step 2: Use Nginx to serve the static build files
# FROM nginx:stable-alpine

# # Copy the build files from the build stage to Nginx's public folder
# COPY --from=build /app/dist /usr/share/nginx/html

# # Optionally, copy a custom Nginx config if needed
# # COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

