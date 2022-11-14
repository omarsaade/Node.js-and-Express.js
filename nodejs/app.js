const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const DB_URL = "mongodb://localhost:27017/appDB";

let userSchema = mongoose.Schema({
  name: String,
  age: Number,
});

//Model
let User = mongoose.model("user", userSchema); //collection users baad ma t7awela

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "statics")));

app.get("/", (req, res, next) => {
  res.render("index", {
    users: [],
  });
});

app.post("/", bodyParser.urlencoded({ extended: true }), (req, res, next) => {
  mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
    // mongoose.connect(DB_URL, (err) => {
    console.log("connected to database");
    mongoose.disconnect();
  });
});

app.listen(3000, () => console.log("server listen on port 3000"));
