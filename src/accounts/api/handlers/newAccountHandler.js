const CustomersList = require("../../../db/customersList");
const CustomersController = require("../../../customers/api/controller/CustomersController");

function newAccountHandler(request, reply) {
  const customerId = request.body.customerId;
  const ammount = request.body.ammount;

  const customer = CustomersController._findCustomer(customerId);

  if (customer === null)
    return reply.view("src/accounts/api/templates/newAccount.pug", {
      fail: true,
    });

  CustomersController._createAccount(customer, ammount);

  reply.view("src/accounts/api/templates/newAccount.pug", { success: true });
}

module.exports = newAccountHandler;
