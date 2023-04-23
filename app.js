const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("This is a home page.");
    res.write(
      "<form method='post' action='/create-user'><input type='text' name='username'/><button type='submit'>submit</button></form>"
    );
    res.write("</html>");
    res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<ul><li>user 1</li><li>user 2</li></ul>");
    res.write("</html>");
    res.end();
  }

  if (url === "/create-user" && method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk.toString().split("="));
      res.write("<html>");
      res.write(`Welcome ${chunk.toString().split("=")[1]}`);
      res.write("</html>");
      res.end();
    });
  }
});

server.listen(3000, () => console.log("server is running"));
