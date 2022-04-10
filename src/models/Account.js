const uuid = require("uuid");

class Account {
  constructor(customerId, balance) {
    this._customer_id = customerId;
    this._account_id = uuid.v4();
    this._balance = balance;
    this._transaction_history = [];
  }
}

module.exports = Account;
