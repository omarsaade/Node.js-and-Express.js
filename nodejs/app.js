const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
//import mongoose
const mongoose = require("mongoose");
const app = express();

const DB_URL = "mongodb://localhost:27017/appDB";

//  ODM
let userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

//Model  ODM
let User = mongoose.model("user", userSchema); //collection users baad ma t7awela

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
    //   Read
    User.find((err, users) => {
      mongoose.disconnect();
      res.render("index", {
        users: users,
      });
    });
  });
});

app.post("/", bodyParser.urlencoded({ extended: true }), (req, res, next) => {
  mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
    User.findOne({ name: req.body.name }, (err, user) => {
      user.age = req.body.age;
      user.save((err) => {
        mongoose.disconnect();
        res.redirect("/");
      });
    });
  });
});

app.listen(3000, () => console.log("server listen on port 3000"));
