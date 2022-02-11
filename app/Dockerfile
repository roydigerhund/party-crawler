FROM node:16 AS build

WORKDIR /usr/src/app

COPY ./package.json .
RUN yarn

COPY . /usr/src/app
RUN yarn build
RUN prisma generate

RUN yarn start
