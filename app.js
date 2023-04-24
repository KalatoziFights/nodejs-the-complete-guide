const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("another middleware");
  res.send("<h1>Add Product Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("another middleware");
  res.send("<h1>hello from express</h1>");
});

app.listen(3000);
