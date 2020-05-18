db = require('./connection.js');
game = require('./game');

const addNewPlayer = (gameID, playerID) => {
    return db.none(`INSERT INTO ingame (game_id, player_id, position) VALUES ('${gameID}', '${playerID}', '0')`);
}

const checkPlayer = (playerID) => {
    return db.any(`SELECT game_id FROM ingame WHERE player_id = '${playerID}'`);
}

const addPlayer = (gameID, playerID) => {
    return checkPlayer(playerID)
        .then(result => {
            const ingameID = result;
            db.none(`INSERT INTO ingame (game_id, player_id, position) VALUES ('${gameID}','${playerID}', '0')`);
        }).then(() => {
            game.updatePlayerNumbers(gameID)
        }).catch(error => {
            console.log(error)
        })
}

const updatePlayer = (gameID, playerID, position) => {
    return db.none(`UPDATE ingame SET position='${position}' WHERE game_id='${gameID}' and player_id = '${playerID}'`);
}

module.exports = {
    addNewPlayer,
    checkPlayer,
    addPlayer,
    updatePlayer
}