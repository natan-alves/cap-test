const { startServer } = require('./src/server');

(async function runServer() {
    try {
        const fastify = await startServer();

        console.log(fastify.printRoutes());

    } catch (error) {
        throw error;
    }
})();
