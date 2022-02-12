FROM node:16 AS build

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./prisma ./prisma/
RUN yarn
RUN yarn setup

COPY . /usr/src/app
RUN yarn build

CMD ["yarn", "start-deploy"]
