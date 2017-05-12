/*
* @Author: caolinming
* @Date:   2017-03-23 17:57:03
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-08 17:57:07
* 首页
*/
'use strict';
var commElem = require("../../commElem");
var _ = commElem._;
var homePageUI = require("../pageuis/homePageUI");

var driver, testVars, platformName;

before(function (){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});

//点击进入 选择定位地址
exports.clickLocationTitle = function (){commElem.waitAndClick(homePageUI.locationTitlePar);};
//获取当前的 定位地址
exports.getLocationInfo = function (){
	commElem.getAndPrintText(homePageUI.locationTitlePar, function (text){
		global.dol.locationInfo  = text.replace('送到：', '');
		// console.log(global.dol);
		// console.log(global.dol.locationInfo);
	});};

exports.clickPlaceeditTv = function (){commElem.waitAndClick(homePageUI.placeeditTvPar);};

//输入 要搜索的地址 并提交
exports.clickAndAjaxSearchEdit = function (text){commElem.waitClickAndAjax(homePageUI.searchEditPar, text);};
//现在搜索地址 结果列表的 第一个地址
exports.clickLocationViewDivider = function (){commElem.waitAndClick(homePageUI.locationViewDividerPar);};




//点击进入 商品搜索页
exports.clickGoodsSearch = function (){commElem.waitAndClick(homePageUI.goodsSearchPar);};



exports.clickActionHFYX = function (){commElem.clickText("话费游戏");};

exports.clickActionMW8 = function (){commElem.clickText("摸我吧");};
//2017-05 一元夺宝 ，改成心愿单
exports.clickActionXYD = function (){commElem.clickText("心愿单");};
exports.swipeActionXYD = function (type, times){commElem.waitTextElemAndSwipe("心愿单", type, times);};

exports.clickActionDZP = function (){commElem.clickText("大转盘");};
exports.clickActionYECZ = function (){commElem.clickText("余额充值");};




//点击进入 进入购物车
exports.clickFabCart = function (){commElem.waitAndClick(homePageUI.fabCartPar);};

//点击进入 获取购物上提示的商品数量
exports.getCartGoodsNum = function (){
	commElem.waitAndClick(homePageUI.cartBadgePar, function (text){
		global.cartGoodsNum = text;
	});};




