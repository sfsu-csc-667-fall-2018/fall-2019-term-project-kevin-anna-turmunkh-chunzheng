db = require('./index');

const createNewGame = (gameID) => {
    return db.one(`INSERT INTO game (game_id, player_numbers) VALUES ('${gameID}', 1)`);
};

module.exports = {
    createNewGame
}