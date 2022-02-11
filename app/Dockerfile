FROM node:16 AS build

WORKDIR /usr/src/app

COPY ./package.json .
RUN yarn

COPY . /usr/src/app
RUN TSC_COMPILE_ON_ERROR=true yarn build

RUN yarn start
