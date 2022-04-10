const customersList = require("../../../db/customersList");

async function accountsHandler(request, reply) {
  reply.view("src/accounts/api/templates/accounts.pug", {
    data: customersList.data,
  });
}

module.exports = accountsHandler;
