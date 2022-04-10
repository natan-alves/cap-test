const uuid = require("uuid");

class Transaction {
  constructor(ammount) {
    this._transaction_id = uuid.v4();
    this._ammount = ammount;
    this._date = new Date();
  }
}

module.exports = Transaction;
