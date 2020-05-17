const lobbySocket = io('/lobby');

lobbySocket.on('get games', () => {
  lobbySocket.emit('games list');
});

lobbySocket.on('display games', currentGames => {

  $('#games').empty();
  
  for(let i = 0; i < currentGames.length; i++){

    const { game_id, num_players } = currentGames[i];

    console.log("NUMPLAYERS: ", num_players)
    
    const str = 'Name: Game #' + i + ' Players: ' + num_players;

    if(num_players < 2){
      const form = $( 
        `<form method="POST" action="/lobby/joinGame">
          <label>"${str}"</label>
          <input type="hidden" name="game_id" value="${game_id}"></input>
          <input type="submit" value="Join Game">
        </form>`
      );

      $('#games').append(form);

    } else {
      $('#games').append( $( '<span>' ).text( str + ' Game Full!' ) );
    }
  }  
});