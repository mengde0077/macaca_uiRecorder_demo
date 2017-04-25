/*
* @Author: caolinming
* @Date:   2017-03-24 17:33:43
* @Last Modified by:   caolinming
* @Last Modified time: 2017-04-24 10:30:34
* 公共操作
*/

'use strict';
var commElem = require("../../commElem");
var _ = commElem._;
var utilPageUI = require("../pageuis/utilPageUI");

var driver, testVars, platformName;

before(function(){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});

exports.clickHome = function (){commElem.clickText("首页");};

exports.clickGoods = function (){commElem.clickText("分类");};

exports.clickTemai = function (){commElem.clickText("特卖");};

exports.clickOrder = function (){commElem.clickText("订单");};

exports.clickMine = function (){commElem.clickText("我的");};

// 关闭首页广告弹窗
exports.clickCancleShow = function (){commElem.waitAndClick(utilPageUI.cancleShowPar);};
// 关闭 新手红包弹窗
exports.clickDismissCoupon = function (){commElem.waitAndClick(utilPageUI.dismissCouponPar);};
//  左上角 返回图标
exports.clickArrowBack = function (){commElem.waitAndClick(utilPageUI.arrowBackPar);};
//  左上角 返回图标
exports.clickArrowBack1 = function (){commElem.waitAndClick(utilPageUI.arrowBack1Par);};
//   关闭新登录H5页
exports.clickClosePage = function (){commElem.waitAndClick(utilPageUI.closePagePar);};

exports.clickOk = function (){commElem.clickText("确认");};

exports.clickCancel = function (){commElem.clickText("取消");};



