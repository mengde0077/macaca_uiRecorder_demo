/*
* @Author: caolinming
* @Date:   2017-04-02 10:23:47
* @Last Modified by:   caolinming
* @Last Modified time: 2017-04-25 10:06:26
* 我的 -- 设置 页下面的相关功能 UI操作细节
*/

'use strict';
var chai = require("chai");
var should = chai.should();
var commElem = require("../../commElem");
var _ = commElem._;

var driver, testVars, platformName;

before(function (){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});

exports.btnLoginPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/btn_login"]',
        iosElem: '//*[@name="登录/注册"]',
        elementDesc: '登录/注册'
};

exports.btnChangepwdPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/as_ll_changepwd"]',
        iosElem: '//*[@name="帐户安全"]',
        elementDesc: '帐户安全'
};
    
exports.btnWifiPicAutoloadPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/togbtn_wifi_pic_autoload"]',
        iosElem: '//*[@name="仅WIFI下加载商品图片"]',
        elementDesc: 'click: 仅WIFI下加载商品图片 开 或 关'
};   

