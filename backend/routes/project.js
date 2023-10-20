var express = require("express");
var router = express.Router();
const porjectController = require("../controllers/project");

router.post("/", porjectController.create);

module.exports = router;
