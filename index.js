/**
 * Title: Uptime Monitoring API
 * Description: A RESTful API for monitoring the uptime of various services.
 * @author Muhammad Shahrukh
 * Version: 1.0.0S
 * @date 2025-08-07
 */

// Dependencies
const http = require("http");

// App object - module scaffolding
const app = {};

// Configuration
app.config = {
  port: 3000,
};

// Create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Server is running on port ${app.config.port}`);
  });
};
// hendle requests
app.handleReqRes = (req, res) => {
  res.end("Hello programer! This is a simple uptime monitoring API.");
};

// Start the server
app.createServer();
