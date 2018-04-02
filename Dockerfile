FROM johnpapa/angular-cli:latest as node

RUN npm set strict-ssl false

WORKDIR /app
COPY ./ /app/
RUN npm install
RUN ng build --prod

FROM nginx:1.13.10-alpine
COPY --from=node /app/dist/ /usr/share/nginx/html
EXPOSE 80