FROM node:16.19.0-slim as build-step
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build-step /app/dist/crudtuto-Front /usr/share/nginx/html
EXPOSE 80
