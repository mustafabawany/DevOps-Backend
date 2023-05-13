FROM node:alpine
COPY . /app
WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

EXPOSE 3000
CMD [ "npm", "start" ]