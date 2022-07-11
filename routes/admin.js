const express = require("express");

const router = express.Router();

// same as using app.use() app.get() app.post()
// path is now /admin/add-product (GET)
router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/admin/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>"
  );
});

// path is now /admin/add-product (POST)
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
