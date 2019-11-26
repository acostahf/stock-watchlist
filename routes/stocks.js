var express = require('express');
var router = express.Router();
var stockCtrl = require('../controllers/stocks')

/* GET users listing. */
router.get('/', stockCtrl.index);

module.exports = router;
