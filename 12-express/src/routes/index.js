const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.write("Hello, Express");
  res.end("That is all for now");
});

router.get("/home", (req, res) => {
  res.write("Hello, Express on home\n");
  res.end("That is all for now for home");
});

module.exports = router;
