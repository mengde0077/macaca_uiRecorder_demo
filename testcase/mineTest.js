'use strict';
var co = require('co');
var homePage = require('../commons/b2c/pages/homePage');
var minePage = require('../commons/b2c/pages/minePage');
var unitPage = require('../commons/b2c/pages/unitPage');
var userInfo = require('../commons/datasource/userInfo');
var commBrowser = require('../commons/commBrowser');

var  userName = '18700000002';
var  password = '1234567';

exports.unloginStatusToLoginTest = function(){
	//适用版本 3.0.0--3.0.4 
    describe('场景：验证未登录状态下，我的 各跳转到登录页面入口', function () { 
        // unitPage.clickDismissCoupon();  //关闭新人红包弹窗
        unitPage.clickMine();   //进入我的
        minePage.clickBtnSetting();   //点击 设置
        minePage.clickFunZHAQ();    //点击 账户安全
        unitPage.clickClosePage();       //关闭 登录页
        minePage.clickFunDCDL();    //点击 您尚未登录，点此登录
        unitPage.clickClosePage();       //关闭 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickIvUserMsg();   //进入 我的消息 中心
        unitPage.clickClosePage();       //关闭 登录页
        minePage.clickBtnLogin();    //点击注册登录
        unitPage.clickClosePage();       //关闭 登录页
        minePage.clickBakance();   // 点击 余额 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickSalary();   // 点击 佣金 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickPoint();   // 点击 天金 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickLoan();   // 点击 校花 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickYe8();   // 点击 页8 不需要 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickBox();   // 点击 信用合作 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickJobs();   // 点击 赚钱 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickCoupon();   // 点击 红包 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickDogGoodsPackage();   // 点击 粮包 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickInvite();   // 点击 邀请好友 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickAddress();   // 点击 收货地址 跳转至 登录页
        unitPage.clickClosePage();      //关闭 登录页
        minePage.clickFeedback();   // 点击 意见反馈 不需要跳转至 登录页
        minePage.clickBtnTucao();   // 点击 去吐槽
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickFeedback();   // 点击 意见反馈 不需要跳转至 登录页
        minePage.clickBtnPraise();   // 点击 去赞美
        minePage.clickBtnBackTitle();   // 点击 去赞美  返回 我的
        minePage.clickCustomerServiceCenter();   // 点击 客服中心 不需要跳转至 登录页
        unitPage.clickArrowBack1();      //返回 我的
    });
};

exports.loginStatusToLoginTest = function(){
    //适用版本 3.0.0--3.0.4  
    describe('场景：验证已登录状态下，我的 原需要登录的入口跳转 正常', function () {
        // unitPage.clickDismissCoupon();  //关闭新人红包弹窗
        unitPage.clickMine();   //进入我的
        minePage.clickBtnSetting();   //点击 设置
        minePage.clickFunZHAQ();    //点击 账户安全
        unitPage.clickArrowBack1();      //返回 设置
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickIvUserMsg();   //进入 我的消息 中心
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickBakance();   // 点击 余额 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickSalary();   // 点击 佣金 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickPoint();   // 点击 天金 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickLoan();   // 点击 校花 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickYe8();   // 点击 页8 不需要 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickBox();   // 点击 信用合作 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickJobs();   // 点击 赚钱 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickCoupon();   // 点击 红包 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickDogGoodsPackage();   // 点击 粮包 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickInvite();   // 点击 邀请好友 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
        minePage.clickAddress();   // 点击 收货地址 跳转至 登录页
        unitPage.clickArrowBack();      //返回 我的
    });
};

exports.loginTest = function(){
	//适用版本  3.0.0--3.0.4 
    describe('场景：我的  登录流程', function () {
        unitPage.clickMine();   //点击 “我的”
        minePage.clickBtnLogin();   //点击注册登录
        minePage.login(userName, password);
        minePage.clickIvAvatar();   //点击 “我的资料”
        unitPage.clickArrowBack();      //返回 我的
    });
};

exports.getUserInfo = function(){
    //适用版本  3.0.0--3.0.4 
    
    describe('场景：校验用户账户信息', function () {
        // co(function *(){
            // var userAccountPar = {};
            // userInfo.getUserAccountInfo2(userName, function (userAccountInfo) {
            //     var balance = '￥' + userAccountInfo.balance.toFixed(2);
            //     var commission = '￥' + userAccountInfo.commission.toFixed(2);
            //     // console.log(balance);
            //     userAccountPar = {
            //         balance: balance,
            //         commission: commission
            //     }
            //     console.log(userAccountPar);
            // minePage.testBalance2(userAccountPar.balance); 
            // }); 
            // 这个数据是异步获取的，获取实现早于  userAccountPar 数据的生成  
       
        // });

        // 使用全局变量的方式传递 --可行
        userInfo.getUserAccountInfo(userName);
        minePage.getBalance();
        minePage.testBalance();
        minePage.testSalary();
        minePage.testPoint();
        minePage.testLoan();
    });
};


exports.userSettingTest = function(){
    //适用版本  3.0.0--3.0.4 
    describe('场景：我的 设置 相关功能验证', function () {
        unitPage.clickMine();   //点击 “我的”
        minePage.clickBtnSetting();   //点击 设置
        minePage.clickBtnWifiPicAutoload();   //点击 “wifi 开关” 开
        minePage.shouldBtnWifiPicAutoloadIsShecked();   //断言  为 已选中
        minePage.clickBtnWifiPicAutoload();   //点击 “wifi 开关” 关
        minePage.shouldBtnWifiPicAutoloadIsNotShecked();   //断言  为 未选中
        minePage.clickCleanCache();  // 点击  清理缓存
        minePage.clickAboutUs();   //点击 进入  关于我们
        minePage.clickFunYHXY();   //点击进入  用户协议
        unitPage.clickArrowBack1();      //返回 关于我们
        unitPage.clickArrowBack();      //返回 设置    
        unitPage.clickArrowBack();      //返回 我的
    });
};

exports.loginOffTest = function(){
    //适用版本  3.0.0--3.0.4 
    describe('场景：我的  退出登录流程', function () {
        unitPage.clickMine();   //点击 “我的”
        minePage.clickBtnSetting();   //点击 设置
        minePage.clickLoginOff();   //点击 “退出登录”
    });
};




