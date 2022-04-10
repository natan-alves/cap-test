function newAccountViewHandler(request, reply) {
  reply.view("src/accounts/api/templates/newAccount.pug");
}

module.exports = newAccountViewHandler;
