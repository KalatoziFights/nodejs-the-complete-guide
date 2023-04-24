const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("users middleware");
  res.send("<h1>Users Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("main middleware");
  res.send("<h1>hello from main express</h1>");
});

app.listen(3000);
