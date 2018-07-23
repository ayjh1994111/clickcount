'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const detaList = {
        list: [
            {id: 1, title: 'this is new 1', url: '/news/urlq'},
            {id: 2, title: 'this is new 2', url: '/news/url2'}
        ]
    };
    await this.ctx.render('news/list.tpl', detaList);
  }
}

module.exports = NewsController;
