const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// same as using app.use() app.get() app.post()
// path is now /admin/add-product (GET)
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// path is now /admin/add-product (POST)
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
