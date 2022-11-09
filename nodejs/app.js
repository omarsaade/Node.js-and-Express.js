// with express

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); // default 'views'

app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.post("/", bodyParser.urlencoded({ extended: true }), (req, res, next) => {
  res.render("index", {
    name: req.body.name,
  });
});
app.listen(3000, () => console.log("server listen on port 3000"));
