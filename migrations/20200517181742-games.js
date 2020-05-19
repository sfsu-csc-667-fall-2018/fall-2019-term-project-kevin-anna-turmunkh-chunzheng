'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'games', 
      {
        game_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        host_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        player_numbers: {
          type: Sequelize.INTEGER,
          allowNull: false  
        }
      }
    ); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games');
  }
};
