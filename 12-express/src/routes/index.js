const express = require("express");
const { meetings } = require("../controllers/index");
const { home } = require("../controllers/index");
const router = express.Router();

router.get("/", home);

router.get("/meetings", meetings);

module.exports = router;
