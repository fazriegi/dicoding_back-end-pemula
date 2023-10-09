const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const start = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);
  await server.start();

  console.log(`Server start on ${server.info.uri}`);
};

start();
