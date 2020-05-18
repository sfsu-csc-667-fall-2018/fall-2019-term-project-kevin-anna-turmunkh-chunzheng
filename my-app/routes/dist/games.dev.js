"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (request, response) {
  response.render('game');
});
router.post('/lobby', function (request, response) {
  var user = request;
  var err = request.query.error;
  response.render('lobby', {
    user: user,
    error: err
  });
});
module.exports = router;