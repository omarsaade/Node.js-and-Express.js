const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//connect database and node
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  MongoClient.connect("mongodb://localhost:27017/firstDB", (err, client) => {
    const db = client.db();

    db.collection("users")
      .find({})
      // .sort({})
      // .sort([])
      // .limit(2)
      // .skip(2)
      /*
      
      //fi tari2ten na3mul filter fion
      .find(
        {},
        {
          // age: {
          //   //gte    greater than equal
          //   //ne     not equal
          //   //in     fi
          //   // $ne: 333,
          //   //$nin :[18,19,20]
          //   $in: [18, 19, 20],
          // },
          // $or:[{}]
          // limit: 2,
          // skip: 2,
          // sort: {
          //   age: -1,
          //   name: 1,
          // },
          sort: [
            ["age", -1],
            ["name", 1],
          ],
        }
      )
      */
      .toArray()
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
