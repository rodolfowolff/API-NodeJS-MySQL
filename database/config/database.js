require('dotenv').config();

const options = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.MYSQL_HOSTNAME,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
  dialectOptions:
    process.env.MYSQL_SSL === 'true' ? {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    } : {},
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = options;
