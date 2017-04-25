/*
* @Author: caolinming
* @Date:   2017-03-23 17:57:03
* @Last Modified by:   caolinming
* @Last Modified time: 2017-04-24 10:30:03
* 首页
*/
'use strict';
var commElem = require("../../commElem");
var _ = commElem._;

var driver, testVars, platformName;

before(function (){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});

exports.clickActionHFYX = function (){commElem.clickText("话费游戏");};

exports.clickActionMW8 = function (){commElem.clickText("摸我吧");};
exports.clickActionYYDB = function (){commElem.clickText("一元夺宝");};
exports.swipeActionYYDB = function (type){commElem.waitTextElemAndSwipe("一元夺宝", type, 2);};

exports.clickActionDZP = function (){commElem.clickText("大转盘");};
exports.clickActionYECZ = function (){commElem.clickText("余额充值");};



