'use strict';

const Controller = require('egg').Controller;

class FaceDataController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.ctx = ctx;
        this.FaceDataModel = ctx.model.FaceDataModel;
        this.FaceDataService = ctx.service.faceDataService;
        this.ResponseCode = ctx.response.ResponseCode;
        this.ServerResponse = ctx.response.ServerResponse;
    }

    async addface() {
       const response = await this.FaceDataService.addFaceData(this.ctx.query);
       this.ctx.body = response;
    }

    async getallface() {
        const response = await this.FaceDataService.getAllFace();
        this.ctx.body = response.data;
    }
}

module.exports = FaceDataController;