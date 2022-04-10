const response = {
  success: `<!DOCTYPE html><html><head><title>Create New Account</title><link rel="stylesheet" href="https://getbootstrap.com/docs/5.1/dist/css/bootstrap.min.css"><style>html,body {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="text"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
</style></head><body><main class="form-signin"><div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Account created!</strong><button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button></div><form method="POST" action="#"><h1 class="display-1 text-center">🏦</h1><h1 class="h3 mb-3 fw-normal text-center">New Current Account</h1><div class="form-floating"><input class="form-control" type="text" id="floatingUUID" placeholder="UUID" name="customerId"><label for="floatingUUID">Customer Id</label></div><div class="form-floating mb-3"><input class="form-control" type="number" id="floatingCredit" placeholder="Initial Credit" name="ammount" value="0" step="0.01"><label for="floatingCredit">Initial Credit</label></div><button class="w-100 btn btn-lg btn-primary" type="submit">Create Account</button></form></main><script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script><script src="https://getbootstrap.com/docs/5.1/dist/js/bootstrap.bundle.min.js"></script></body></html>`,
  error: `<!DOCTYPE html><html><head><title>Create New Account</title><link rel="stylesheet" href="https://getbootstrap.com/docs/5.1/dist/css/bootstrap.min.css"><style>html,body {
    height: 100%;
}

body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
}

.form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .form-floating:focus-within {
    z-index: 2;
}

.form-signin input[type="text"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
</style></head><body><main class="form-signin"><div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Customer Not Found!</strong><button class="btn-close" type="button" data-bs-dismiss="alert" aria-label="Close"></button></div><form method="POST" action="#"><h1 class="display-1 text-center">🏦</h1><h1 class="h3 mb-3 fw-normal text-center">New Current Account</h1><div class="form-floating"><input class="form-control" type="text" id="floatingUUID" placeholder="UUID" name="customerId"><label for="floatingUUID">Customer Id</label></div><div class="form-floating mb-3"><input class="form-control" type="number" id="floatingCredit" placeholder="Initial Credit" name="ammount" value="0" step="0.01"><label for="floatingCredit">Initial Credit</label></div><button class="w-100 btn btn-lg btn-primary" type="submit">Create Account</button></form></main><script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script><script src="https://getbootstrap.com/docs/5.1/dist/js/bootstrap.bundle.min.js"></script></body></html>`,
};

module.exports = response;
