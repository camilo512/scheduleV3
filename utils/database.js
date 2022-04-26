const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '12345',
  database: 'schedule',
  logging: false,
});

module.exports = { db };
