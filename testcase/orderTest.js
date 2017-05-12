'use strict';
var orderPage = require('../commons/b2c/pages/orderPage');
var homePage = require('../commons/b2c/pages/homePage');
var goodsPage = require('../commons/b2c/pages/goodsPage');
var minePage = require('../commons/b2c/pages/minePage');
var unitPage = require('../commons/b2c/pages/unitPage');
var commBrowser = require('../commons/commBrowser');

var  userName = '18700000001';
var  password = '1234567';

exports.unloginStatusToLoginTest = function(){
    //适用版本 3.0.0--3.0.4  
    describe('场景：验证未登录状态下，订单 各跳转到登录页面入口', function () {
        unitPage.clickOrder();   //进入 订单
        unitPage.clickClosePage();       //关闭 登录页
    });
};

exports.allOrderListTest = function(){
    //适用版本  3.0.0--3.0.4 
    describe('场景：遍历 检查各订单列表页', function () {
        unitPage.clickOrder();
        orderPage.clickOrderTypeCS();
        orderPage.clickOrderTypeY8();
        orderPage.clickOrderTypeSN();
        orderPage.clickOrderTypeHZ();
        orderPage.clickOrderTypeLP();
        orderPage.clickOrderTypeRS();
        orderPage.clickOrderTypeCZ();
        orderPage.clickOrderTypeTM();
        orderPage.swipeOrderTypeHZ('left');   //让列表头标签回位
        orderPage.clickOrderTypeLP();
        orderPage.clickOrderTypeSN();
    });
};





