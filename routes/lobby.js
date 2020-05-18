const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
const game = require('../db/game');
const ingame = require('../db/ingame');
const io = require('../public/scripts/socket');
const lobbySocket = io.of('/lobby');

router.get('/', ensureLoggedIn("/users/login"), (request, response) => {
  const { user } = request;
  const err = request.query.error;
  response.render('lobby', { user: user, error: err });
/*
  ingame.checkPlayer(user.id) 
        .then(results => {
          if ( results[0] != undefined && results[0] != null) {
            console.log(user.username + ' is in game: ' + results[0].game_id);
            response.redirect(`/game/${results[0].game_id}`);
          } else {
            response.render('lobby', { user: user, error: err });
          }
        }).catch(error => { console.log(error) }); */
});

router.post('/create', ensureLoggedIn("/users/login"), (request, response) => {
  const { user } = request;
  const hostName = request.body.hostName;

  game.createNewGame(hostName)
    .then(results => {
      const game_id = results.game_id;
      ingame.addNewPlayer(game_id, user.id)
            .then(() => {
          response.redirect(`/game/${game_id}`);
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
});


router.post('/join', ensureLoggedIn("/users/login"), (request, response) => {
  const { user } = request;
  const gameId = request.body.game_id;

  console.log('User: ' + user.username + ' JOINED GAME: ' + gameId);

  ingame.addPlayer(gameId, user.id)
    .then(() => {
      lobbySocket.emit('get games');
      response.redirect(`/game/${gameId}`);
    }).catch(error => {
      console.log(error);
    });
})

const displayGames = (socket) => {
  if (socket != undefined) {
    game.getGames()
      .then(games => {
        //console.log('games: ' + JSON.stringify(games));
        socket.emit('display games', games);
      });
  }
};

lobbySocket.on('connection', socket => {

  console.log('connected to lobby');

  lobbySocket.emit('get games');

  socket.on('games list', () => {
    displayGames(socket);
  });
});


module.exports = router