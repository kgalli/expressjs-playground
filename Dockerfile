FROM node:12 as builder
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY src src
COPY .eslintignore .
COPY .eslintrc .
COPY tsconfig.json .

RUN npm run dist

CMD npm run start:watch

FROM node:12 as prod

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY --from=builder /usr/src/app/dist dist

EXPOSE 7777
ENTRYPOINT ["node", "/usr/src/app/dist/index.js"]
