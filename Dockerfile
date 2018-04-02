FROM node:8.11 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
RUN ng build

FROM nginx:1.13.10
COPY --from=node /app/dist/ /usr/share/nginx/html