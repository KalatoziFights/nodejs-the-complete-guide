const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

// listen incoming requests

server.listen(3000);
