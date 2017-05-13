/*
* @Author: caolinming
* @Date:   2017-04-02 10:13:24
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-13 16:03:36
*/

'use strict';
var chai = require("chai");
var should = chai.should();
var commElem = require("../../commElem");
var _ = commElem._;

var driver, testVars, platformName;

before(function(){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});

exports.btnLoginPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/btn_login"]',
        iosElem: '//*[@name="登录/注册"]',
        elementDesc: '登录/注册',
        waitTime: 30000
};

exports.login = function (userName, password){
    it('输入: 登录账号(' + userName + '),密码(' + password + '),并登陆', function(){
        if(platformName === 'Android'){
            return driver
                .wait('//*[@resource-id="com.ndol.sale.starter:id/edt_account"]', 30000).click()
                .val(userName)
                .wait('//*[@resource-id="com.ndol.sale.starter:id/edt_password"]', 30000).click()
                .val(password)
                .wait('//*[@resource-id="com.ndol.sale.starter:id/btn_login"]', 30000).click()
                ;
        }else{
            return driver
                .wait('//*[@name="mobileLeft newLogIn"]', 30000).sendElementActions('tap')
                .sendKeys(_(userName))
                .wait('//*[@name="pswLeft newLogIn"]', 30000).sendElementActions('tap')
                .sendKeys(_(password))
                .wait('//*[@name="登  录"]', 30000).sendElementActions('tap')
                ;            
        }
    });  
};

exports.btnSettingPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/btn_setting"]',
        elementDesc: '设置'
};

exports.IvUserMsgPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/iv_user_msgCount"]',
        elementDesc: '用户消息 图标'
};

exports.IvAvatarPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/iv_avatar"]',
        elementDesc: '去 我的资料 头像'
};

exports.getBalancePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/balance"]',
        elementDesc: '余额'
};

exports.getPointPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/score"]',
        elementDesc: '天金'
};

exports.getSalaryPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/salary"]',
        elementDesc: '佣金'
};

exports.getLoanPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/loan"]',
        elementDesc: '校花'
};

exports.btnTucaoPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/ll_tucao"]/android.widget.ImageView',
        elementDesc: '意见反馈--去吐槽'
};

exports.btnPraisePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/ll_praise"]/android.widget.ImageView',
        elementDesc: '意见反馈--给赞美'
};

exports.btnBackTitlePar = {
        androidElem: '//*[@resource-id="com.bbk.appstore:id/back_title"]',
        elementDesc: '给赞美--返回'
};












