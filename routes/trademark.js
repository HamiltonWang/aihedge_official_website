var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('trademark', { title: 'AI Hedge-Trademark' });
});

module.exports = router;