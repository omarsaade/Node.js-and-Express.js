// with express

const express = require("express");

const path = require("path");

const app = express();

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(3000, () => console.log("server listen on port 3000"));

// C:\Users\10User\Documents\Node.js-and-Express.js\nodejs
