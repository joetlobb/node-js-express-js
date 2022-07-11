const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: true }));

// specify /admin in front of the route to use /admin/...
app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
