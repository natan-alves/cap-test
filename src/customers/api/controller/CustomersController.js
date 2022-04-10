const CustomersList = require("../../../db/customersList");

const Account = require("../../../models/Account");
const Transaction = require("../../../models/Transaction");

class CustomersController {
  _createAccount(customer, ammount) {
    const account = new Account(customer._id, ammount);

    if (ammount > 0) {
      const transaction = new Transaction(ammount);
      account._transaction_history.push(transaction);
    }

    const customerIndex = CustomersList.data.findIndex(
      (item) => item._id === customer._id
    );
    CustomersList.data[customerIndex]._accounts.push(account);
    CustomersList.data[customerIndex]._balance += parseFloat(ammount);
  }

  _findCustomer(customerId) {
    return (
      CustomersList.data.find((customer) => {
        return customer._id === customerId;
      }) || null
    );
  }
}

module.exports = new CustomersController();
