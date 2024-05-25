const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const initializeServer = async () => {
  // Define server configuration
  const config = {
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // Allow all origins for CORS
      },
    },
  };

  // Create Hapi server instance
  const server = Hapi.server(config);

  // Register routes
  server.route(routes);

  // Start the server
  try {
    await server.start();
    console.log(`Server is running at ${server.info.uri}`);
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

// Invoke the server initialization function
initializeServer();
