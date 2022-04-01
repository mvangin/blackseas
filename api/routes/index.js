var express = require('express');
var router = express.Router();
var contactController = require('../controllers/contactController')


router.post('/contactPost', contactController.contactPost)


module.exports = router;
