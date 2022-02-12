FROM node:16 AS build

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./prisma ./prisma/
RUN yarn

COPY . /usr/src/app
RUN yarn build
RUN yarn migrate

CMD ["yarn", "start"]
