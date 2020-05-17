"use strict";

var lobbySocket = io('/lobby');
lobbySocket.on('get games', function () {
  lobbySocket.emit('games list');
});
lobbySocket.on('display games', function (currentGames) {
  $('#games').empty();

  for (var i = 0; i < currentGames.length; i++) {
    var _currentGames$i = currentGames[i],
        game_id = _currentGames$i.game_id,
        game_name = _currentGames$i.game_name,
        num_players = _currentGames$i.num_players;
    console.log("NUMPLAYERS: ", num_players);
    var str = 'Name: ' + game_name + ' Players: ' + num_players;

    if (num_players < 4) {
      var form = $("<form method=\"POST\" action=\"/lobby/joinGame\">\n          <label>\"".concat(str, "\"</label>\n          <input type=\"hidden\" name=\"game_id\" value=\"").concat(game_id, "\"></input>\n          <input type=\"submit\" value=\"Join Game\">\n        </form>"));
      $('#games').append(form);
    } else {
      $('#games').append($('<span>').text(str + ' Game Full!'));
    }
  }
});