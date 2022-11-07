// router middleware : router level
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("hello from about");
});

router.get("/me", (req, res, next) => {
  res.send("hello from me");
});

router.get("/company", (req, res, next) => {
  res.send("hello from company");
});

module.exports = router;

// or

// exports.router = router
