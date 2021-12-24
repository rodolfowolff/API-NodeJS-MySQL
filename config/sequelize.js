import Sequelize from 'sequelize';

const configDatabse = require('../database/config/database');

const sequelize = new Sequelize(configDatabse);

module.exports = sequelize;
