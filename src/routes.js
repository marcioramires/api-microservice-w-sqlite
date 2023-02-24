const express = require("express");
const personController = require("./controllers/PersonController.js");
const router = express.Router();

router.route("/person").get(personController.all).post(personController.create)
router.route("/person/:id").get(personController.one).put(personController.update).delete(personController.delete)

module.exports = router;