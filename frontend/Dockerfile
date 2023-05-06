FROM node:18-buster

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

CMD yarn run dev
