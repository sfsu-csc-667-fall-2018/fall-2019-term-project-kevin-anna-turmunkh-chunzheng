'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'game', 
      {
        id: {
           type: Sequelize.INTEGER,
           primaryKey: true,
           autoIncrement: true
        },
        createdAt:{
          type: Sequelize.INTEGER,
          defaultValue: Sequelize.literal('NOW()'),
          allowNull: false
        },
        testString: {
          type: Sequelize.STRING,
          allowNull: false
        },
        blk_king: {
          type: Sequelize.STRING,
          defaultValue: 'e8',
          allowNull: false
        },
        wht_king: {
          type: Sequelize.STRING,
          defaultValue: 'e1',
          allowNull: false
        },
        blk_queen: {
          type: Sequelize.STRING,
          defaultValue: 'd8',
          allowNull: false
        },
        wht_queen: {
          type: Sequelize.STRING,
          defaultValue: 'd1',
          allowNull: false
        },
        wht_bishop1: {
          type: Sequelize.STRING,
          defaultValue: 'c1',
          allowNull: false
        },
        wht_bishop2: {
          type: Sequelize.STRING,
          defaultValue: 'f1',
          allowNull: false
        },
        blk_bishop1: {
          type: Sequelize.STRING,
          defaultValue: 'c8',
          allowNull: false
        },
        blk_bishop2: {
          type: Sequelize.STRING,
          defaultValue: 'f8',
          allowNull: false
        },
        wht_knight1: {
          type: Sequelize.STRING,
          defaultValue: 'b1',
          allowNull: false
        },
        wht_knight2: {
          type: Sequelize.STRING,
          defaultValue: 'g1',
          allowNull: false
        },
        blk_knight1: {
          type: Sequelize.STRING,
          defaultValue: 'b8',
          allowNull: false
        },
        blk_knight2: {
          type: Sequelize.STRING,
          defaultValue: 'g8',
          allowNull: false
        },
        wht_rook1: {
          type: Sequelize.STRING,
          defaultValue: 'a1',
          allowNull: false
        },
        wht_rook2: {
          type: Sequelize.STRING,
          defaultValue: 'h1',
          allowNull: false
        },
        blk_rook1: {
          type: Sequelize.STRING,
          defaultValue: 'a8',
          allowNull: false
        },
        blk_rook2: {
          type: Sequelize.STRING,
          defaultValue: 'h8',
          allowNull: false
        },
        wht_pawn1: {
          type: Sequelize.STRING,
          defaultValue: 'a2',
          allowNull: false
        },
        wht_pawn2: {
          type: Sequelize.STRING,
          defaultValue: 'b2',
          allowNull: false
        },
        wht_pawn3: {
          type: Sequelize.STRING,
          defaultValue: 'c2',
          allowNull: false
        },
        wht_pawn4: {
          type: Sequelize.STRING,
          defaultValue: 'd2',
          allowNull: false
        },
        wht_pawn5: {
          type: Sequelize.STRING,
          defaultValue: 'e2',
          allowNull: false
        },
        wht_pawn6: {
          type: Sequelize.STRING,
          defaultValue: 'f2',
          allowNull: false
        },
        wht_pawn7: {
          type: Sequelize.STRING,
          defaultValue: 'g2',
          allowNull: false
        },
        wht_pawn8: {
          type: Sequelize.STRING,
          defaultValue: 'h2',
          allowNull: false
        },
        blk_pawn1: {
          type: Sequelize.STRING,
          defaultValue: 'a8',
          allowNull: false
        },
        blk_pawn2: {
          type: Sequelize.STRING,
          defaultValue: 'b8',
          allowNull: false
        },
        blk_pawn3: {
          type: Sequelize.STRING,
          defaultValue: 'c8',
          allowNull: false
        },
        blk_pawn4: {
          type: Sequelize.STRING,
          defaultValue: 'd8',
          allowNull: false
        },
        blk_pawn5: {
          type: Sequelize.STRING,
          defaultValue: 'e8',
          allowNull: false
        },
        blk_pawn6: {
          type: Sequelize.STRING,
          defaultValue: 'f8',
          allowNull: false
        },
        blk_pawn7: {
          type: Sequelize.STRING,
          defaultValue: 'g8',
          allowNull: false
        },
        blk_pawn8: {
          type: Sequelize.STRING,
          defaultValue: 'h8',
          allowNull: false
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('game')
  }
};
