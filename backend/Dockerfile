FROM node:18-buster

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

CMD npx sequelize-cli db:migrate

CMD yarn run dev
