
# Stage 1
FROM node:alpine as build-step
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install --legacy-peer-deps
RUN npm install -g @angular/cli
COPY . /app
CMD npm start
FROM nginx:alpine
COPY --from=build-step /app/dist/crudtuto-Front /usr/share/nginx/html
EXPOSE 80
