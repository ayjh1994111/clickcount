'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;
  const user = app.model.define('user', {
    // 用户id
    userid: {
      type: STRING,
      allowNull: false,
      primaryKey: true,
    },
    userpassword: {
      type: STRING,
      allowNull: false,
    },
    userrole: {
      type: STRING,
      allowNull: false,
      defaultValue: '0',
    },
    usersex: {
      type: STRING,
      allowNull: true,
    },
    usershowme: {
      type: STRING,
      allowNull: true,
    },
    userphoto: {
      type: STRING,
      allowNull: true,
    },
    userphone: {
      type: STRING,
      allowNull: true,
    },
  }, {
    timestamps: true,
    createAt: true,
    updateTime: 'updateTimestamp',
  });

  // user.beforeBulkUpdate(user => {
  //   user.attributes.updateTime = new Date();
  //   return user;
  // });
  // app.model.user = user;
  return user;
};
