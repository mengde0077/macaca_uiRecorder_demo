/*
* @Author: caolinming
* @Date:   2017-03-23 17:57:03
* @Last Modified by:   caolinming
* @Last Modified time: 2017-04-25 10:09:39
* 订单页
*/

'use strict';
var commElem = require("../../commElem");
var _ = commElem._;

var driver, testVars, platformName;

before(function(){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});

exports.clickOrderTypeCS = function (){commElem.clickText("超市");};
exports.clickOrderTypeY8 = function (){commElem.clickText("夜8");};
exports.clickOrderTypeSN = function (){commElem.clickText("苏宁");};
exports.clickOrderTypeHZ = function (){commElem.clickText("盒子");};
exports.swipeOrderTypeHZ = function (type){commElem.waitTextElemAndSwipe("盒子", type, 10);};
exports.clickOrderTypeLP = function (){commElem.clickText("粮票");};
exports.clickOrderTypeRS = function (){commElem.clickText("预售");};
exports.clickOrderTypeCZ = function (){commElem.clickText("充值");};
exports.clickOrderTypeTM = function (){commElem.clickText("特卖");};
exports.clickOrderTypeLP = function (){commElem.clickText("粮票");};


