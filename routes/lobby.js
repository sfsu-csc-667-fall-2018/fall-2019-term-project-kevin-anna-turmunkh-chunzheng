const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const game = require('../db/').Game;

router.get('/', ensureLoggedIn("/users/login"), (request, response) => {
  const { user } = request;
  const err = request.query.error;

  response.render('lobby', { user: user, error: err });
});

router.post('/create', ensureLoggedIn("/users/login"), (request, response) => {
  const { user } = request;
  console.log(user.id);

  //game.createNewGame()
  //response.render('game', { user: user, error: err });
});


router.post('/join', ensureLoggedIn("/users/login"), (request, response) => {
  const {user} = request;


})

module.exports = router