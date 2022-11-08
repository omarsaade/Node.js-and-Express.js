// with express

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// const bodyParserMW = bodyParser(); //deprecated
//form : urlencoded
// or
//json :json
// ana hon btejine data mshafra...so lezem y7awela la data 3adye
//yaane bado yfek el tashfir men 5ilel library ,
// awal maktabe esma query string w hye built in bel node js
//  // const q = require('querystring'); w tene maktabse esma qs
// iza imet el extended hye true , yaane enta 3am t2elo lal body
// sta3mel el qs..hye shi mawjud 3al npm
//law false yaane sta5dam querystring
//extended lal tashfir iza qs() het true
// true...cz qs is more safer
//hye by default true
const bodyParserMW = bodyParser.urlencoded({ extended: true });
//or
// const bodyParserMW = express.urlencoded({ extended: true });

// hayda el middleware lah yetnafaz lama yeje post request
// npm install --save body-parser

app.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.write('<form action="/" method="POST">');
  res.write('<input name="username"/>');
  res.write('<input name="age" type="number" />');
  res.write('<input type="submit"/>');
  res.write("</form>");
  res.end();
});
// hayda el middleware lah yetnafaz lama yeje get request
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
