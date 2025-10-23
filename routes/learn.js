var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('learn/learn', { title: 'AI Hedge-Learn' });
});

router.get('/i-forget-my-password', function(req, res, next) {
  res.render('learn/i-forget-my-password', { title: 'AI Hedge-Learn' });
});

router.get('/link-my-wallet', function(req, res, next) {
  res.render('learn/link-my-wallet', { title: 'AI Hedge-Learn' });
});

router.get('/swap-tokens', function(req, res, next) {
  res.render('learn/swap-tokens', { title: 'AI Hedge-Learn' });
});

router.get('/withdraw-or-deposit', function(req, res, next) {
  res.render('learn/withdraw-or-deposit', { title: 'AI Hedge-Learn' });
});

router.get('/add-new-positions', function(req, res, next) {
  res.render('learn/add-new-positions', { title: 'AI Hedge-Learn' });
});

router.get('/redeem-the-tokens', function(req, res, next) {
  res.render('learn/redeem-the-tokens', { title: 'AI Hedge-Learn' });
});

module.exports = router;