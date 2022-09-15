'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('InsectTrees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      insectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Insects'
        },
        onDelete: 'CASCADE'
      },
      treeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Trees'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('InsectTrees');
  }
};