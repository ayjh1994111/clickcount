'use strict';

const Service = require('egg').Service;
const uuidv1 = require('uuid/v1');

class FaceDataService extends Service {
  constructor(ctx) {
    super(ctx);
    this.ctx = ctx;
    this.FaceDataModel = ctx.model.FaceDataModel;
    this.ResponseCode = ctx.response.ResponseCode;
    this.ServerResponse = ctx.response.ServerResponse; 
  }

  async getAllFace() {
    const face = await this.FaceDataModel.findAll();
    return this.ServerResponse.createBySuccessData(face);
  }

  async addFaceData(reqf) {
    const faceId = uuidv1();
    const faceLike = reqf.faceLike;
    const faceComment = reqf.faceComment;
    const faceShare = reqf.faceShare;
    const faceAgent = reqf.faceAgent;
    await this.FaceDataModel.create({
        faceId,
        faceLike,
        faceComment,
        faceShare,
        faceAgent,
    });
    return this.ServerResponse.createBySuccessMsg('success');
  }
}

module.exports = FaceDataService;
