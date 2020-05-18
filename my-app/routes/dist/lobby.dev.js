"use strict";

var express = require('express');

var router = express.Router();

var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

router.get('/', ensureLoggedIn("/users/login"), function (request, response) {
  var user = request.user;
  var err = request.query.error;
  response.render('lobby', {
    user: user,
    error: err
  });
});
router.post('/create', ensureLoggedIn("/users/login"), function (request, response) {
  var user = request.user;
  var err = request.query.error;
  response.render('game', {
    user: user,
    error: err
  });
});
router.post('/join', ensureLoggedIn("/users/login"), function (request, response) {
  var user = request.user;
});
module.exports = router;