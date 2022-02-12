FROM node:16 AS build

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .
COPY ./prisma ./prisma/
RUN yarn
RUN yarn setup

COPY ./ .
RUN yarn build
ENV NODE_ENV=production

CMD ["yarn", "start-deploy"]
