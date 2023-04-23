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
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

server.listen(3000, () => console.log("server is running"));
