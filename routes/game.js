const express = require('express');
const io = require('../public/scripts/socket');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const ingame = require('../db/ingame');
const gameSocket = io.of('/game');

router.get('/', ensureLoggedIn("/users/login"), (request, response) => {
  response.render('game');
});

router.get('/:game_id', ensureLoggedIn("/users/login"), (request, response) => {
  const { game_id: gameId } = request.params;
  const { id: playerId, username } = request.user

  response.render('game', {gameId, playerId, username});
});

router.post('/lobby', (request, response) => {
  const user = request;
  const err = request.query.error;
  
  response.render('lobby', {user: user, error: err})
});


gameSocket.on('connection', (socket) => {

  console.log('Connected to game socket');

  gameSocket.emit('get moves');

  socket.on('moves list', (result) => {
    ingame.updatePlayer(result.gameId, result.playerId, result.pos)
      .then(() => {
        console.log('done');
        socket.emit('display moves', result);
      }).catch(error => {
        console.log(error);
      })
  });
});

module.exports = router