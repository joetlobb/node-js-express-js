const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parser for form
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

// app.get()
// app.post() if use app post, the following middleware will not get execute when enter /product because it's a GET req
// but if /add-product is entered the method is POST, then the following middleware will get execute
app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
