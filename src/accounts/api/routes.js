const accountsHandler = require("./handlers/accountsHandler");
const newAccountHandler = require("./handlers/newAccountHandler");
const newAccountViewHandler = require("./handlers/newAccountViewHandler");
const {
  newAccountSchema,
  accountsSchema,
  newAccountFormSchema,
} = require("./shemas/accountsSchema");

async function accountsRoutes(fastify) {
  fastify.route({
    handler: accountsHandler,
    method: "GET",
    path: "/accounts",
    schema: accountsSchema,
  });

  fastify.route({
    handler: newAccountHandler,
    method: "POST",
    path: "/new-account",
    schema: newAccountSchema,
  });

  fastify.route({
    handler: newAccountViewHandler,
    method: "GET",
    path: "/new-account",
    schema: newAccountFormSchema,
  });
}

module.exports = accountsRoutes;
