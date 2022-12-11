const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>home</title></head>");
    res.write("<body><h1>home page is very good.</h1></body>");
    res.write("</html>");
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
