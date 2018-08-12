'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;
  const FaceDataModel = app.model.define('facedata', {
//   主键
    faceId: {
      type: STRING,
      allowNull: false,
      primaryKey: true,
    },
    faceLike: {
      type: STRING,
      defaultValue: '0',
      allowNull: false,
    },
    faceComment: {
      type: STRING,
      defaultValue: '0',
      allowNull: false,
    },
    faceShare: {
      type: STRING,
      defaultValue: '0',
      allowNull: false,
    },
    faceAgent: {
      type: STRING,
      defaultValue: '0',
      allowNull: false,
    }
  }, {
    timestamps: true,
    createAt: true,
    updateTime: 'updateTimestamp',
  });
//   facedata.beforBulkUpdate(facedata => {
//     facedata.attributes.updateTime = new Date();
//     return facedata;
//   });

  return FaceDataModel;
};
