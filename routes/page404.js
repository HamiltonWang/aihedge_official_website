var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('page404', { title: 'AI Hedge' });
});

module.exports = router;