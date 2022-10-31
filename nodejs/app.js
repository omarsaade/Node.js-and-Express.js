/*

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.write("Hello from Home");
  else if (req.url === "/about") res.write("Hello from about 2");
  res.end();
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});

*/

const express = require("express");

const app = express();

//middleware
// huwe 3ibara 3an function btsir ma3 kell request byejile
app.use((req, res, next) => {
  // hye e5tisar la res.write w res.end bi zet el wa2et
  res.send("<h1>Hello</h1>");
});

app.listen(3000, () => {
  console.log("server Listen on board 3000");
});
