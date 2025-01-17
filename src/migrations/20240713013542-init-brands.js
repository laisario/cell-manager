'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('brands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      name: Sequelize.DataTypes.STRING,
      country: Sequelize.DataTypes.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('brands');
  }
};
