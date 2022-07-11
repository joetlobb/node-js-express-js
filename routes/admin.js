const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// same as using app.use() app.get() app.post()
// path is now /admin/add-product (GET)
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Product" });
});

// path is now /admin/add-product (POST)
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
