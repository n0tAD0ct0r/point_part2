FROM node:lts-alpine

WORKDIR /usr/src/app

ADD . /usr/src/app

RUN npm install

ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000
CMD [ "npm", "start" ]