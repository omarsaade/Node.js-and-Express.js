const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//connect database and node
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  MongoClient.connect("mongodb://localhost:27017/firstDB", (err, client) => {
    const db = client.db();

    db.collection("users")
      .find()
      .toArray()
      .then((users) => {
        console.log(users);
        res.render("index", {
          users: users,
        });
      });
  });
});

app.post("/", bodyParser.urlencoded({ extended: true }), (req, res, next) => {
  MongoClient.connect("mongodb://localhost:27017/firstDB", (err, client) => {
    const db = client.db();

    db.collection("users")
      .insertOne({
        name: req.body.name,
        age: +req.body.age,
      })
      .then((result) => {
        // console.log(result);
        res.redirect("/");
      });
  });
});

app.listen(3000, () => console.log("server listen on port 3000"));
