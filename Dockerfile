FROM node:20.11.1-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g npm@v10.5.0
RUN apt-get install nginx
#332
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
