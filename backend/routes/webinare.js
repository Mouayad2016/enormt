var express = require("express");
var router = express.Router();
const webinareController = require("../controllers/webinare/webinare");

router.post("/", webinareController.create);

module.exports = router;