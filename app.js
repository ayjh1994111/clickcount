module.exports = app => {
    app.beforeStart(async function() {
      // 应用会等待这个函数执行完成才启动
      // await app.model.sync({ force: true }); // 开发环境使用
      await app.model.sync({force: false});
    });
  };
  

//   // {workdir}/app.js
// module.exports = app => {
//     app.beforeStart(async function () {
//         await app.model.sync({ force: false }); // false 为不覆盖 true会删除再创建
//     });
// };