var router = require("express").Router();
var testcontroller = require('../controller/test.controller');

router.get('/greetings', testcontroller.greetings);
router.get('/jenkin_greetings', testcontroller.jenkin_greetings);

module.exports = router;