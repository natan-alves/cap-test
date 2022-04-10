FROM node:12.19.0-alpine

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]
