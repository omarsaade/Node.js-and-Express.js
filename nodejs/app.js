// with express

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// const bodyParserMW = bodyParser(); //deprecated
const bodyParserMW = bodyParser.urlencoded({ extended: true });
//or
// const bodyParserMW = express.urlencoded({ extended: true });

app.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.write('<form action="/" method="POST">');
  res.write('<input name="username"/>');
  res.write('<input name="age" type="number" />');
  res.write('<input type="submit"/>');
  res.write("</form>");
  res.end();
});

app.post("/", bodyParserMW, (req, res, next) => {
  // console.log(req.body.username);
  console.log(req.body);

  res.send("done");
});

app.listen(3000, () => console.log("server listen on port 3000"));

// with node js

/*
const http = require("http");
// const body = require("body");
const body = require("body/form");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    if (req.method === "GET") {
      res.write('<form action="/" method="POST">');
      res.write('<input name="username"/>');
      res.write('<input name="age" type="number" />');
      res.write('<input type="submit"/>');
      res.write("</form>");
      res.end();
    } else if (req.method === "POST") {
      body(req, (err, body) => {
        console.log(body);
        res.end("done");
      });
    }
  })
  .listen(3000, () => console.log("server listen on port 3000"));

  */
