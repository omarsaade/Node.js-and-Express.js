const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//connect database and node
const MongoClient = require("mongodb").MongoClient;
// const ObjectId = require("mongodb").ObjectId;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  MongoClient.connect("mongodb://localhost:27017/firstDB", (err, client) => {
    const db = client.db();

    db.collection("users")
      //filter
      .findOne()
      // .find(
      // {
      // age: 20,
      //  _id: new ObjectId("636e99b956e396a4bc67772c"),
      // }
      // )
      // .toArray()

      .then((user) => {
        console.log(user);
        res.render("index", {
          user: user,
        });
      });
  });
});

app.post("/", bodyParser.urlencoded({ extended: true }), (req, res, next) => {
  MongoClient.connect("mongodb://localhost:27017/firstDB", (err, client) => {
    const db = client.db();

    db.collection("users")
      .updateOne(
        {
          name: req.body.name,
        },
        {
          //mahjuze bel mongo
          $set: {
            age: +req.body.age,
          },
        }
      )
      .then((result) => {
        console.log(result);
        res.redirect("/");
      });
    // client.close();
  });
});

app.listen(3000, () => console.log("server listen on port 3000"));
