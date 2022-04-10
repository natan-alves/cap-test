const uuid = require("uuid");

class Customer {
  constructor(name, surname) {
    this._id = uuid.v4();
    this._name = name;
    this._surname = surname;
    this._balance = 0;
    this._accounts = [];
  }
}

module.exports = Customer;
