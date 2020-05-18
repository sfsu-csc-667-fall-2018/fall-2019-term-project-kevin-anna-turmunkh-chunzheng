db = require('./connection.js');

const createNewGame = ( hostName ) => {
    return db.one(`INSERT INTO games (host_name, player_numbers) VALUES ('${hostName}', 1) RETURNING game_id`);
};

const getUserID = (gameID) => {
    return db.one(`SELECT * FROM games WHERE game_id = '${gameID}'`);
};

const getGames = () => {
    return db.any(`SELECT * FROM games`);
};

const getPlayerNumber = (gameID) => {
    return db.one(`SELECT player_numbers FROM games WHERE game_id = '${gameID}'`)
}

const updatePlayerNumbers = (gameID) => {
    return db.none(`UPDATE games SET player_numbers=2 WHERE game_id='${gameID}' and player_numbers = 1`);
}

module.exports = {
    createNewGame,
    getUserID,
    getGames,
    updatePlayerNumbers,
    getPlayerNumber
}