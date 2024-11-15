# Main Express.js Dockerfile
FROM node:21-slim

WORKDIR /app

COPY ./package.json .
COPY ./expressjs-fs-monolithic-user-api-demo /app/expressjs-fs-monolithic-user-api-demo
COPY ./expressjs-mongodb-mrc-blogging-api-demo /app/expressjs-mongodb-mrc-blogging-api-demo
COPY ./expressjs-mongodb-mrc-ecommerce-api-demo /app/expressjs-mongodb-mrc-ecommerce-api-demo
RUN npm run setup

COPY ./ /app

EXPOSE 4000

CMD ["node", "index.js"]
