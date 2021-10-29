'use strict';

const Controller = require('egg').Controller;

class SyncController extends Controller {
  async tradingPair() {
    // 同步交易对数据
    // 读取数据库里的交易所工厂合约，循环工厂合约
    // 读取数据库，检查最后一个交易对是什么，从这个交易对开始同步
    // 读取交易对信息
    // 判断交易的两个token是否有问题
    // 排除有问题的token
    // 将交易对存入数据库
  }
  async token() {
    // sd
  }
}

module.exports = SyncController;
