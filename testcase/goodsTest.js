'use strict';
var homePage = require('../commons/b2c/pages/homePage');
var goodsPage = require('../commons/b2c/pages/goodsPage');
var minePage = require('../commons/b2c/pages/minePage');
var unitPage = require('../commons/b2c/pages/unitPage');
var commShould = require('../commons/commShould');
var commBrowser = require('../commons/commBrowser');

var  userName = '18700000001';
var  password = '1234567';

exports.goodsListSwipeTest = function(){
    describe('场景：验证商品列表 向上滑动，隐藏 列表上方 tab 和 下方 tab', function () {
        //适用版本  3.0.0--3.0.4 
        unitPage.clickGoods();
        goodsPage.clickCategoryXXSP();
        // goodsPage.getGoodsNameSize();    //打印出 元素对象 的坐标信息
        goodsPage.swipeGoodsName('up', 1);   //将第2个商品向上滑动
        // commBrowser.swipeOnce(600,1000,600,400);   //滑屏
        commShould.elemCanNotFind('全部');    // 全部 等 上方 tab 被隐藏
        commShould.elemCanNotFind('分类');    // 分类 等 下方 tab 被隐藏
        goodsPage.swipeGoodsName('down', 1);   //将第2个商品向下滑动
        commShould.elemCanFind('全部');    // 全部 等 上方 tab 显示
        commShould.elemCanFind('分类');    // 分类 等 下方 tab 显示
    });  
};

exports.findGoodsByName = function(){
    describe('场景：将想要操作的商品移动到first位置', function () {
        //适用版本  3.0.0--3.0.4 
        unitPage.clickGoods();
        goodsPage.clickCategoryXXSP();
        goodsPage.findGoodsName();
        // goodsPage.swipeGoodsNameLastToFrist();   //将列表中最后一个商品移动到最前面
        // goodsPage.swipeGoodsName('down', 1);   //将第2个商品向下滑动    
    });
};

exports.addCartTest = function(){
    //适用版本  3.0.0--3.0.4 
    describe('场景：添加商品到购物车，清空购物车，不能去结算页', function () {
        // unitPage.clickGoods();
        // commBrowser.Back();
        // commBrowser.Back();     //可以退出程序，要启动用例时才能唤起
        unitPage.clickGoods();
        goodsPage.clickCategoryXXSP();
        goodsPage.addCart(1);    //添加列表中的第2个商品
        goodsPage.toCart();
        goodsPage.clickCartClear();  //清空购物车
        unitPage.clickOk();    //确认
        goodsPage.clickCartToBuySubmit();
        unitPage.clickArrowBack();      //返回 商品分类页
    });
};

exports.addCartTest2 = function(){
    //适用版本  3.0.0--3.0.4 
    describe('场景：添加商品到购物车，去结算页，提示要登录', function () {
        unitPage.clickGoods();
        goodsPage.clickCategoryXXSP();
        goodsPage.addCart(0);
        goodsPage.toCart();
        goodsPage.clickCartClear();
        unitPage.clickCancel();     //取消
        goodsPage.clickCartToBuySubmit();
        goodsPage.waitToLogin();
        commBrowser.Back();      //退出 提示登录窗口
        unitPage.clickArrowBack();      //返回 购物车
        unitPage.clickArrowBack();      //返回 商品分类页
    });
};





