'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;
  const log = app.model.define('log', {
  // 日志ID
    logID: {
      type: STRING,
      allowNull: false,
      primaryKey: true,
    },
    logType: {
      type: STRING,
      allowNull: false,
    },
    logUser: {
      type: STRING,
      allowNull: false,
    },
    logContent: {
      type: STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
    createAt: true,
    updateTime: 'updateTimestamp',
  });
  log.beforBulkUpdate(log => {
    log.attributes.updateTime = new Date();
    return log;
  });
  log.model.log = log;
  return log;
};
