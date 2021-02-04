FROM node:12-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

EXPOSE 3000

CMD [ "npm", "dev" ]