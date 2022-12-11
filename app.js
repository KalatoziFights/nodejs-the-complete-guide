const http = require("http");
const fs = require("fs");
// file system

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>home</title></head>");
    res.write(`<body><form action="/message" method="POST">
    <input type="text" name="message"/></form></body>`);
    res.write("<button>send</button>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>fighter</title></head>");
  res.write("<body>fight</body>");
  res.write("</html>");
  res.end();
});

// listen incoming requests

server.listen(3000);
