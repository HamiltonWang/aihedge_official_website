var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('careers', { title: 'AI Hedge-Careers' });
});

module.exports = router;
