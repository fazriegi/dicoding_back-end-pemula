const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  await server.start();

  server.route(routes);

  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
