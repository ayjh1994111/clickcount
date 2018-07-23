// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // // read config
    // // console.log('---->' + JSON.stringify(this.config));
    // const { serverUrl, pageSize } = this.config.news;

    // // use build-in http client to GET hacker-news api
    // const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
    //   data: {
    //     orderBy: '"$key"',
    //     startAt: `"${pageSize * (page - 1)}"`,
    //     endAt: `"${pageSize * page - 1}"`,
    //   },
    //   dataType: 'json',
    // });

    // // parallel GET detail
    // const newsList = await Promise.all(
    //   Object.keys(idList).map(key => {
    //     const url = `${serverUrl}/item/${idList[key]}.json`;
    //     return this.ctx.curl(url, { dataType: 'json' });
    //   })
    // );
    const detaList = {
                list: [
                    {id: 1, title: 'this is new 1', url: '/news/urlq'},
                    {id: 2, title: 'this is new 2', url: '/news/url2'}
                ]
            };
    return newsList.map(res => res.data);
  }
}

module.exports = NewsService;