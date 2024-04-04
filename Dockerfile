FROM node:20.11.1-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
#332
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
