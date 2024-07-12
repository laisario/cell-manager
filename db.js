import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: 'cell-manager-db',
  user: 'root',
  password: '123456789',
  host: 'localhost',
  port: 3306,
  ssl: true,
  clientMinMessages: 'notice',
});

module.exports = sequelize;