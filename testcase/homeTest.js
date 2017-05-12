'use strict';
var orderPage = require('../commons/b2c/pages/orderPage');
var homePage = require('../commons/b2c/pages/homePage');
var goodsPage = require('../commons/b2c/pages/goodsPage');
var minePage = require('../commons/b2c/pages/minePage');
var unitPage = require('../commons/b2c/pages/unitPage');
var commShould = require('../commons/commShould');
var commBrowser = require('../commons/commBrowser');

var  userName = '18700000001';
var  password = '1234567';

exports.unloginDismissCouponTest = function(){
    //适用版本  3.0.0--3.0.4 
    describe('场景：检查未登录时  首页的 新用户 红包弹窗', function () {
        unitPage.clickDismissCoupon();    //关闭红包窗口
        unitPage.clickGoods();    
        unitPage.clickHome();    //从其他tab 切回首页，应展开 新用户红包窗口
        unitPage.clickDismissCoupon();
    });
};

exports.unloginStatusToLoginTest = function(){
    //适用版本 3.0.0--3.0.4  
    describe('场景：验证未登录状态下，首页各跳转到登录页面入口', function () {
        unitPage.clickHome();   //进入 首页
        homePage.clickActionHFYX();      //话费游戏
        unitPage.clickClosePage();       //关闭 登录页
        homePage.clickActionMW8();       //摸我吧
        unitPage.clickClosePage();       //关闭 登录页
        homePage.clickActionXYD();      //一元夺宝
        unitPage.clickClosePage();       //关闭 登录页
        homePage.clickActionDZP();       //大转盘
        unitPage.clickClosePage();       //关闭 登录页
        homePage.swipeActionXYD('left', 2);     //将 一元夺宝 向左拖动
        homePage.clickActionYECZ();       //余额充值
        unitPage.clickClosePage();       //关闭 登录页
        homePage.swipeActionXYD('right', 2);     //将 一元夺宝 向左拖动
        homePage.swipeActionXYD('up', 10);     //将 一元夺宝 向左拖动

    });
};


exports.locationTest = function(){
    //适用版本 3.0.0--3.0.4  
    describe('场景：定位地址切换', function () {
        unitPage.clickHome();   //进入 首页
        homePage.clickLocationTitle();    //点击 定位地址
        homePage.clickPlaceeditTv();     //点击去搜索
        homePage.clickAndAjaxSearchEdit('楚翘城');   //输入 并 提交
        homePage.clickLocationViewDivider();
        homePage.getLocationInfo();      //获取当前的定位地址，将地址 存入全局变量
    });
};
