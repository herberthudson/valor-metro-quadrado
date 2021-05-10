FROM node:16 as base

ENV HUSKY_SKIP_INSTALL=1

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .
