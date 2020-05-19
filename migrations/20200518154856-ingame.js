'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'ingame', 
      {
        game_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: false,
          primaryKey: false
        },
        player_id: {
          type: Sequelize.INTEGER,
          allowNull: false 
        },
        position: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingame');
  }
};
