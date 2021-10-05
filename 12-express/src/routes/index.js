const express = require("express");
const { meetings } = require("../controllers/index");
const { home, postMessage } = require("../controllers/index");
const router = express.Router();

router.get("/", home);
router.post("/", postMessage);
router.get("/meetings", meetings);

module.exports = router;
