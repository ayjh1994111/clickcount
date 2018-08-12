'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_Yid';

  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    database: 'egg_db',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '123456',
    timezone: '+08:00',
  }

  config.security = {
    csrf: {
      enable: false
    }
  }
  return config;
};