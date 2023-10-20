var express = require("express");
var router = express.Router();
const kundkotaktContoller = require("../controllers/kundkontakt");

router.post("/", kundkotaktContoller.create);

module.exports = router;
