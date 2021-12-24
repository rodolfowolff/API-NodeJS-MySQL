import Sequelize from 'sequelize';

const configDatabse = require('./database');

const sequelize = new Sequelize(configDatabse);

module.exports = sequelize;
