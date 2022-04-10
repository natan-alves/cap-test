exports.options = {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    consumes: ["application/json", "application/x-www-form-urlencoded"],
    host: "localhost:8080",
    info: {
      description: "Account API",
      title: "Account API",
      version: "1.0.0",
    },
    produces: ["text/html; charset=utf-8", "application/json"],
    schemes: ["http", "https"],
  },
};
