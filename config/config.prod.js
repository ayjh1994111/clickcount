'use strict';

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  dialectOptions: {
    charset: 'utf8mb4'
  },
  database: 'egg_db',
  host: 'localhost',
  port: '3306',
  username: 'root',
  password: 'txtx.1314',
  dialect : "mysql",
  operatorsAliases: false,
  timezone : "+08:00"
};
