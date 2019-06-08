FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_DATABASE=host.docker.internal

CMD npm run start:prod