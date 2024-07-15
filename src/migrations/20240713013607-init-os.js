'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('operatingSystems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: Sequelize.DataTypes.STRING,
      version: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('operatingSystems');
  }
};
