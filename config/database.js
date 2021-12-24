require('dotenv').config();

export const development = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'api_db',
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
};

export const test = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'api_db',
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
};

export const production = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: 'api_db',
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
};
