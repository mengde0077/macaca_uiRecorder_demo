/*
* @Author: caolinming
* @Date:   2017-03-23 17:59:57
* @Last Modified by:   caolinming
* @Last Modified time: 2017-04-29 15:01:34
* 超市 商品分类 页
*/

'use strict';
var goodsPageUI = require("../pageuis/goodsPageUI");
var commElem = require("../../commElem");
var _ = commElem._;

var driver, testVars, platformName;

before(function(){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});

//超市商品一级分类
exports.clickCategoryXXSP = function (){commElem.clickText("休闲零食");};
exports.clickCategoryTGBG = function (){commElem.clickText("糖果饼干");};


exports.getGoodsNameProp = function (){commElem.getAndPrintProp(goodsPageUI.goodsNamePar);};
exports.getGoodsNameSize = function (){commElem.getAndPrintRect(goodsPageUI.goodsNamePar);};
exports.findGoodsName = function (){commElem.findAndGetAllName(goodsPageUI.goodsNamePar);};

exports.swipeGoodsName = function (type, index){commElem.waitElemAndSwipe(goodsPageUI.goodsNamePar, type, index, 5);};
exports.swipeGoodsNameLastToFrist = function (){
	commElem.waitElemAndSwipeLastToFrist(goodsPageUI.goodsNamePar);
};



exports.addCartMove = function (){commElem.waitElemDragTo(goodsPageUI.addCartPar,1,996,609);};

exports.addCart = function (index){commElem.waitAndGetClick(goodsPageUI.addCartPar,index);};
exports.toCart = function (){commElem.waitAndClick(goodsPageUI.toCartPar);};



//购物车 操作 
exports.clickCartClear = function (){commElem.clickText("一键清空");};
exports.clickCartToBuySubmit = function (){commElem.clickText("去结算");};

exports.waitToLogin = function (){commElem.waitText("使用已有账号登录");};
exports.clickToLogin = function (){commElem.clickText("使用已有账号登录");};

