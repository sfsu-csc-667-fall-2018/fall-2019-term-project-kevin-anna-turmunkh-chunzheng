"use strict";

var express = require('express');

var router = express.Router();

var passport = require('../authentication');

var bcrypt = require('bcrypt');

var Users = require('../db').Users;

router.get('/login', function (request, response) {
  var message = request.flash('error');
  response.render('login', {
    message: message
  });
});
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/users/login',
  failureFlash: true
}), function (_, response) {
  return response.redirect('/lobby');
});
router.get('/logout', function (request, response) {
  request.logout();
  response.redirect('/');
});
router.get('/signup', function (_, response) {
  response.render('signup', {
    message: []
  });
});
router.post('/signup', function (request, response) {
  var _request$body = request.body,
      username = _request$body.username,
      password = _request$body.password;
  bcrypt.hash(password, 10).then(function (hashedPassword) {
    return Users.createUser(username, hashedPassword);
  }).then(function (user) {
    request.login({
      id: user.id
    }, function (error) {
      if (error != null) {
        console.log(error);
        response.render('login', {
          message: ['An error occurred when trying to log you in.']
        });
      } else {
        response.redirect('/lobby');
      }
    });
  })["catch"](function (error) {
    console.log(error);
    response.render('signup', {
      message: ['Something bad happened.' + error]
    });
  });
});
module.exports = router;