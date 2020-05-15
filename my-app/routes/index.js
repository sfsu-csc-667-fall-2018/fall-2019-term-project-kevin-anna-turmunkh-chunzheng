var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/lobby', function(req, res, next) {
  res.render('lobby', { title: 'Lobby Page' });
});

router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Game Page' });
});


module.exports = router;
