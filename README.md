# Coding Assignment

This project consists of an API that allow to opening current account for a list of already existed customers.

The application has 3 endpoints:

-   GET /accounts - front-end displaying all customers and their respectivally data and accounts
-   GET /new-account - front-end to input the information to create a new account
-   POST /new-account - if customer exists, create a new account

## Stack

-   [node.js](https://nodejs.org/en/)
-   [fastify](https://www.fastify.io/)
-   [jest](https://jestjs.io/)
-   [pug](https://pugjs.org/)

## Running Application

### With Docker

```
docker-compose up
```

This command will make the App accessible via `http://localhost:8080/`

## Without Docker

```
npm install
npm start
```

## Documentation

With the App up, the documentation is accessible via `http://localhost:8080/docs`

## Tests

```
npm test
```