// application middleware : app level
const express = require("express");

const aboutRouter = require("./about-router");
const app = express();

app.get("/", (req, res, next) => {
  res.send("hello from home");
});

app.use("/about", aboutRouter);

app.listen(3000, () => {
  console.log("server Listen on port 3000");
});
