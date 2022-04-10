const customersList = require("../../../db/customersList");

const response = {
  success: `<!DOCTYPE html><html><head><title>Accounts List</title><link rel="stylesheet" href="https://getbootstrap.com/docs/5.1/dist/css/bootstrap.min.css"><style>html,body {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.customers {
    width: 100%;
    max-width: 830px;
    padding: 15px;
    margin: auto;
}

.card {
    margin-bottom: 5px;
}
</style></head><body><main class="customers"><h1 class="display-1 text-center">🏦</h1><div class="card"><div class="card-body"><p class="card-text mb-1">Name: Natan</p><p class="card-text mb-1">Surname: Alves</p><p class="card-text mb-1">Customer Id: ${customersList.data[0]._id}</p><p class="card-text">Overall Balance: $0</p><div class="card"><ul class="list-group list-group-flush"><li class="list-group-item">No accounts yet</li></ul></div></div></div><div class="card"><div class="card-body"><p class="card-text mb-1">Name: Queen</p><p class="card-text mb-1">Surname: Elizabeth</p><p class="card-text mb-1">Customer Id: ${customersList.data[1]._id}</p><p class="card-text">Overall Balance: $0</p><div class="card"><ul class="list-group list-group-flush"><li class="list-group-item">No accounts yet</li></ul></div></div></div><div class="card"><div class="card-body"><p class="card-text mb-1">Name: John</p><p class="card-text mb-1">Surname: Peter</p><p class="card-text mb-1">Customer Id: ${customersList.data[2]._id}</p><p class="card-text">Overall Balance: $0</p><div class="card"><ul class="list-group list-group-flush"><li class="list-group-item">No accounts yet</li></ul></div></div></div></main><script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script><script src="https://getbootstrap.com/docs/5.1/dist/js/bootstrap.bundle.min.js"></script></body></html>`,
};

module.exports = response;
