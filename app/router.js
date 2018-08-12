'use strict';
/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  // console.log(controller);
  // console.log(require);
  router.get('/', controller.home.index);
  console.log(controller.faceDataController);
  router.get('/facedata/getallface', controller.faceDataController.getallface);
  router.get('/facedata/addface', controller.faceDataController.addface);
  // router.get('/user/users', controller.user.users);
  // require('./router/forward/UserRouter')(app);
};
