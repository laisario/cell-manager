'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      model: Sequelize.DataTypes.STRING,
      brandId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'brands',
          },
          key: 'id',
        }
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        }
      },
      operatingSystemId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'operatingSystems',
          },
          key: 'id',
        }
      },
      color: Sequelize.DataTypes.STRING,
      price: Sequelize.DataTypes.STRING,
      storage: Sequelize.DataTypes.STRING,
      ram: Sequelize.DataTypes.STRING,
      screenSize: Sequelize.DataTypes.STRING,
      cameraResolution: Sequelize.DataTypes.STRING,
      batteryCapacity: Sequelize.DataTypes.STRING,
      connectivity: Sequelize.DataTypes.STRING,
      physicalDimensions: Sequelize.DataTypes.STRING,
      weight: Sequelize.DataTypes.STRING,
      image: Sequelize.DataTypes.BLOB,
      published: { type: Sequelize.DataTypes.DATE, defaultValue: new Date() },
      updated: { type: Sequelize.DataTypes.DATE, defaultValue: new Date() },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
