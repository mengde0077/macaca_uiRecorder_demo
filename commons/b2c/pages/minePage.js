/*
* @Author: caolinming
* @Date:   2017-03-23 17:57:03
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-05 14:58:57
* 我的 页
*/

var minePageUI = require("../pageuis/minePageUI");
var mineSettingPageUI = require("../pageuis/mineSettingPageUI");
var commElem = require("../../commElem");
var _ = commElem._;
var commShould = require("../../commShould");


var driver, testVars, platformName;

before(function (){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});

//点击: “ 登录/注册 ”  功能入口 
exports.clickBtnLogin = function (){commElem.waitAndClick(minePageUI.btnLoginPar);};

//“ 登录/注册 ”子页 ，输入账号密码登录
exports.login = function (userName, password){minePageUI.login(userName, password);};   

//点击: “ 设置 ” 功能入口   **************************
exports.clickBtnSetting = function (){commElem.waitAndClick(minePageUI.btnSettingPar);};
//点击: “ 退出登录 ” 功能入口
exports.clickLoginOff = function (){commElem.clickText("退出登录");};
exports.clickBtnWifiPicAutoload = function (){commElem.waitAndClick(mineSettingPageUI.btnWifiPicAutoloadPar);};
exports.shouldBtnWifiPicAutoloadIsNotShecked = function (){commShould.shouldElemIsNotShecked(mineSettingPageUI.btnWifiPicAutoloadPar);};
exports.shouldBtnWifiPicAutoloadIsShecked = function (){commShould.shouldElemIsShecked(mineSettingPageUI.btnWifiPicAutoloadPar);};
//账户安全 功能入口
exports.clickFunZHAQ = function (){commElem.waitAndClick(mineSettingPageUI.btnChangepwdPar);};
exports.clickCleanCache = function (){commElem.clickText("清理缓存");};
exports.clickAboutUs = function (){commElem.clickText("关于我们");};
exports.clickFunYHXY = function (){commElem.clickText("用户协议");};
exports.clickFunDCDL = function (){commElem.clickText("您尚未登录，点此登录");};

//点击: “ 我的消息 ” 功能入口
exports.clickIvUserMsg = function (){commElem.waitAndClick(minePageUI.IvUserMsgPar);};

//点击: “ 我的资料 ” 功能入口
exports.clickIvAvatar = function (){commElem.waitAndClick(minePageUI.IvAvatarPar);};


//点击: “ 余额 ” 功能入口
exports.clickBakance = function (){commElem.clickText("余额");};
// exports.testBalance = function (textAffirm){commShould.waitAndEqualAffirm(minePageUI.getBalancePar,textAffirm);};
exports.testBalance = function (){commShould.waitAndEqualAccountInfo(minePageUI.getBalancePar,'balance');};
exports.testBalance2 = function (text){commShould.waitAndEqualAffirm(minePageUI.getBalancePar, text);};



exports.getBalance = function (){commElem.getAndPrintText(minePageUI.getBalancePar);};

//点击: “ 佣金 ” 功能入口
exports.clickSalary = function (){commElem.clickText("佣金");};
exports.testSalary = function (){commShould.waitAndEqualAccountInfo(minePageUI.getSalaryPar,'salary');};

//点击: “ 天金 ” 功能入口
exports.clickPoint = function (){commElem.clickText("天金");};
exports.testPoint = function (){commShould.waitAndEqualAccountInfo(minePageUI.getPointPar,'point');};

//点击: “ 校花 ” 功能入口
exports.clickLoan = function (){commElem.clickText("校花");};
exports.testLoan = function (){commShould.waitAndEqualAccountInfo(minePageUI.getLoanPar,'loan_balance');};

//点击: “ 夜8 ” 功能入口
exports.clickYe8 = function (){commElem.clickText("夜8");};

//点击: “ 信用盒子 ” 功能入口
exports.clickBox = function (){commElem.clickText("信用盒子");};

//点击: “ 赚钱 ” 功能入口
exports.clickJobs = function (){commElem.clickText("赚钱");};

//点击: “ 红包 ” 功能入口
exports.clickCoupon = function (){commElem.clickText("红包");};

//点击: “ 粮包 ” 功能入口
exports.clickDogGoodsPackage = function (){commElem.clickText("粮包");};

//点击: “ 邀请好友 ” 功能入口
exports.clickInvite = function (){commElem.clickText("邀请好友");};

//点击: “ 收货地址 ” 功能入口
exports.clickAddress = function (){commElem.clickText("收货地址");};

//点击: “ 意见反馈 ” 功能入口
exports.clickFeedback = function (){commElem.clickText("意见反馈");};
exports.clickBtnTucao = function (){commElem.waitAndClick(minePageUI.btnTucaoPar);};
exports.clickBtnPraise = function (){commElem.waitAndClick(minePageUI.btnPraisePar);};
exports.clickBtnBackTitle = function (){commElem.waitAndClick(minePageUI.btnBackTitlePar);};


//点击: “ 客服中心 ” 功能入口
exports.clickCustomerServiceCenter = function (){commElem.clickText("客服中心");};



