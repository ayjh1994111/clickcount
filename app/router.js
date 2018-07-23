'use strict';
/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  // console.log(require);
  router.get('/', controller.home.index);
  // router.get('/user/users', controller.user.users);
  require('./router/forward/UserRouter')(app);
};
