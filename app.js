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
  // ....
}); 

// when visiting localhost:3000, the following will be logged
// In the middleware!
// In another middleware!

const server = http.createServer(app);

server.listen(3000);
