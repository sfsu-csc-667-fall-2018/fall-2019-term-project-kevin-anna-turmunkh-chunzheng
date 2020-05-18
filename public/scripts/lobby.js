const lobbySocket = io('/lobby');

lobbySocket.on('get games', () => {
  lobbySocket.emit('games list');
});

lobbySocket.on('display games', currentGames => {

  $('#games').empty();
  
  for(let i = 0; i < currentGames.length; i++){

    const { game_id, host_name, player_numbers} = currentGames[i];
    
    const str = 'Host Name: ' + host_name + ' Game ID: ' + game_id + 'Players: ' + player_numbers;
    console.log(str);

    if(player_numbers < 2){
      const form = $( 
        `<form method="POST" action="/lobby/join">
          <label>"${str}"</label>
          <input type="hidden" name="game_id" value="${game_id}"></input>
          <input type="submit" value="Join Game">
          <br>
        </form>`
      );

      $('#games').append(form);

    } else {
      $('#games').append( $( '<span>' ).text( str + ' Game Full!' ) );
    }
  }  
});