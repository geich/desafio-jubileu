FROM node:12-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "dev" ]