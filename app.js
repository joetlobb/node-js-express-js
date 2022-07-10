const http = require("http");

const express = require("express");

const app = express();

// add middleware function
app.use((req, res, next) => {
  console.log("In the middleware!");
  next(); // allow the request to continue to the next middleware in line
});

// add another middleware function
app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

// const server = http.createServer(app);
// server.listen(3000);

// this code will do the same as create server and listen
app.listen(3000); 

