import { extname } from 'path';

'use strict';
const Service = require('egg').Service;
const md5 = require('md5');
const _ = require('lodash');
const uuid = require('uuid');
const { salt } = require('../common/eggcommon');
const __TAG__ = require('../common/usercommon');

class LogService extends Service {
    constructor(ctx) {
        super(x);
        this.ctx = ctx;
        this.session = ctx.session;
        this.LogModel = ctx.model.log;
        this.ResponseCode = ctx.response.ResponseCode;
        this.ServerResponse = ctx.response.ServerResponse;
    }

    async _addLogByUser(log) {
        
    }
}
