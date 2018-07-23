'use strict';

module.exports = appInfo => {
  const config = exports = {};
  appInfo.name = 'xxq';
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_17801171929';
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  }
  // add your config here
  config.middleware = [];
  config.news = {
    pageSize: 5,
    serverUrl: 'http://hacker-news.firebaseio.com/v0',
  }
  return config;
};