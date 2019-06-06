FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_DATABASE="localhost:27017"

CMD npm run start:prod