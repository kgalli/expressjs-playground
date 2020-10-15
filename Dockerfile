FROM node:12
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY src src
COPY .eslintignore .
COPY .eslintrc .
COPY tsconfig.json .

RUN npm run dist

EXPOSE 7778

ENTRYPOINT ["node", "/usr/src/app/dist/index.js"]
