const Sequelize = require('sequelize');
const database = require('./db');

const ProductModel = database.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: true
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  operatingSystem: {
    type: Sequelize.STRING,
    allowNull: false
  },
  storage: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ram: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  screenSize: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  mainCamera: {
    type: Sequelize.STRING,
    allowNull: true
  },
  frontCamera: {
    type: Sequelize.STRING,
    allowNull: true
  },
  batteryCapacity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  connectivity: {
    type: Sequelize.STRING,
    allowNull: true
  },
  physicalDimensions: {
    type: Sequelize.STRING,
    allowNull: true
  },
  weight: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  published: { type: Sequelize.DATE, defaultValue: new Date() },
  updated: { type: Sequelize.DATE, defaultValue: new Date() },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'products',
});


module.exports = ProductModel;