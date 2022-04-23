var express = require('express');
var router = express.Router();

var sorcier_controller = require("../controllers/sorcier");

router.get("/",sorcier_controller.getAll);

router.get("/:id",sorcier_controller.getById);

router.post("/",sorcier_controller.create);

router.put("/:id",sorcier_controller.update);

router.delete("/:id",sorcier_controller.delete);

module.exports = router;