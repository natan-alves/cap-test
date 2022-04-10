const Ajv = require("ajv");
const fastify = require("fastify")({
  ignoreTrailingSlash: true,
});
const pug = require("pug");
const swaggerFile = require("./swagger");

const accountsRoutes = require("./accounts/api/routes");

function registerPlugins() {
  fastify.register(require("fastify-swagger"), swaggerFile.options);

  fastify.register(require("point-of-view"), {
    engine: {
      pug: pug,
    },
  });

  fastify.register(require("fastify-formbody"));
}

function registerApiRoutes() {
  fastify.register(accountsRoutes);
}

function setSchemaCompiler() {
  const ajv = new Ajv({
    allErrors: true,
    coerceTypes: true,
    removeAdditional: false,
    useDefaults: true,
  });

  fastify.setValidatorCompiler(({ schema, method, url, httpPart }) => {
    return ajv.compile(schema);
  });
}

async function startServer() {
  try {
    setSchemaCompiler();

    registerPlugins();

    registerApiRoutes();

    await fastify.listen({ port: 8080 }, "0.0.0.0");

    return fastify;
  } catch (error) {
    throw new Error(`Error while trying to start server! ${error}`);
  }
}

async function closeServer() {
  await fastify.close();
}

module.exports = { startServer, closeServer };
