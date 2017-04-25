var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var faker  = require('faker');
var chai = require("chai");
var should = chai.should();
var JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);

var rootPath = getRootPath();
var appPath = '/Users/caolinming/Downloads/b2c_v3.0.1_2017-03-04.apk';
var platformName = /\.apk$/.test(appPath)?'Android':'iOS';

module.exports = function(){

    var driver, testVars;

    before(function(){
        var self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('click: //*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[2]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[2]/android.widget.ImageView', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[3]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[3]/android.widget.ImageView', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/close"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[5]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[5]/android.widget.ImageView', 30000).click();
    });
    
    it('click: 设置 ( //*[@resource-id="com.ndol.sale.starter:id/btn_setting"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_setting"]', 30000).click();
    });
    
    it('click: 您尚未登录，点此登录 ( //*[@resource-id="com.ndol.sale.starter:id/fm_btn_login"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/fm_btn_login"]', 30000).click();
    });
    
    it('click: 手机号 ( //*[@resource-id="com.ndol.sale.starter:id/edt_account"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/edt_account"]', 30000).click();
    });
    
    it('val: 15195995661', function(){
        return driver.val('15195995661');
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/edt_password"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/edt_password"]', 30000).click();
    });
    
    it('val: 123456', function(){
        return driver.val('123456');
    });
    
    it('click: 登录 ( //*[@resource-id="com.ndol.sale.starter:id/btn_login"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_login"]', 30000).click();
    });
    
    it('click: ￥1.84 ( //*[@resource-id="com.ndol.sale.starter:id/balance"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/balance"]', 30000).click();
    });
    
    it('click: 余额明细 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 30000).click();
    });
    
    it('click: 支出 ( //*[@text="支出"] )', function(){
        return driver.wait('//*[@text="支出"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 充值 ( //*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: ￥2.85 ( //*[@resource-id="com.ndol.sale.starter:id/salary"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/salary"]', 30000).click();
    });
    
    it('click: 佣金转余额 ( //*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 佣金提现 ( //*[@resource-id="com.ndol.sale.starter:id/btn2_tv1"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn2_tv1"]', 30000).click();
    });
    
    it('click: 提现记录 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 不可提现金额 (原工资... ( //*[@resource-id="com.ndol.sale.starter:id/salary_tip"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/salary_tip"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 天金 ( //*[@text="天金"] )', function(){
        return driver.wait('//*[@text="天金"]', 30000).click();
    });
    
    it('click: 天金明细 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 30000).click();
    });
    
    it('click: 支出 ( //*[@text="支出"] )', function(){
        return driver.wait('//*[@text="支出"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 兑换 ( //*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"]', 30000).click();
    });
    
    it('click: 大转盘 ( //*[@text="大转盘"] )', function(){
        return driver.wait('//*[@text="大转盘"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 校花 ( //*[@text="校花"] )', function(){
        return driver.wait('//*[@text="校花"]', 30000).click();
    });
    
    it('click: 使用您的8天账户：151... ( //*[@resource-id="com.ndol.sale.starter:id/tv_apply_count"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_apply_count"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/grid"]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/grid"]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.ImageView', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 信用盒子 ( //*[@text="信用盒子"] )', function(){
        return driver.wait('//*[@text="信用盒子"]', 30000).click();
    });
    
    it('click: 允许 ( //*[@resource-id="android:id/button1"] )', function(){
        return driver.wait('//*[@resource-id="android:id/button1"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 赚钱 ( //*[@text="赚钱"] )', function(){
        return driver.wait('//*[@text="赚钱"]', 30000).click();
    });
    
    it('click: 8仔订单 ( //*[@text="8仔订单"] )', function(){
        return driver.wait('//*[@text="8仔订单"]', 30000).click();
    });
    
    it('click: 已发货 ( //*[@resource-id="com.ndol.sale.starter:id/wol_tab_2_tv"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/wol_tab_2_tv"]', 30000).click();
    });
    
    it('click: 已完成 ( //*[@resource-id="com.ndol.sale.starter:id/wol_tab_3_tv"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/wol_tab_3_tv"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 财富 ( //*[@text="财富"] )', function(){
        return driver.wait('//*[@text="财富"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 龙虎榜 ( //*[@text="龙虎榜"] )', function(){
        return driver.wait('//*[@text="龙虎榜"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/partt_8zai_move"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/partt_8zai_move"]', 30000).click();
    });
    
    it('click: 扫码发货 ( //*[@text="扫码发货"] )', function(){
        return driver.wait('//*[@text="扫码发货"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/capture_back"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/capture_back"]', 30000).click();
    });
    
    it('click: 统计 ( //*[@text="统计"] )', function(){
        return driver.wait('//*[@text="统计"]', 30000).click();
    });
    
    it('click: 送单 ( //*[@resource-id="com.ndol.sale.starter:id/btn_tab_order"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_tab_order"]', 30000).click();
    });
    
    it('click: 排班 ( //*[@resource-id="com.ndol.sale.starter:id/btn_tab_schedule"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_tab_schedule"]', 30000).click();
    });
    
    it('click: 应收款 ( //*[@resource-id="com.ndol.sale.starter:id/btn_tab_money"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_tab_money"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/title"]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/title"]/android.widget.ImageView', 30000).click();
    });
    
    it('click: 红包 ( //*[@text="红包"] )', function(){
        return driver.wait('//*[@text="红包"]', 30000).click();
    });
    
    it('click: 拼手气红包 ( //*[@resource-id="com.ndol.sale.starter:id/tab_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_right"]', 30000).click();
    });
    
    it('click: 领红包 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 粮包 ( //*[@text="粮包"] )', function(){
        return driver.wait('//*[@text="粮包"]', 30000).click();
    });
    
    it('click: 典当 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 邀请好友 ( //*[@text="邀请好友"] )', function(){
        return driver.wait('//*[@text="邀请好友"]', 30000).click();
    });
    
    it('click: 发送链接邀请 ( //*[@text="发送链接邀请"] )', function(){
        return driver.wait('//*[@text="发送链接邀请"]', 30000).click();
    });
    
    it('click: 取消 ( //*[@resource-id="com.ndol.sale.starter:id/aivf_copy_cancel"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/aivf_copy_cancel"]', 30000).click();
    });
    
    it('click: 我的二维码 ( //*[@text="我的二维码"] )', function(){
        return driver.wait('//*[@text="我的二维码"]', 30000).click();
    });
    
    it('click: 邀请好友扫一扫 ( //*[@text="邀请好友扫一扫"] )', function(){
        return driver.wait('//*[@text="邀请好友扫一扫"]', 30000).click();
    });
    
    it('click: 分享网页邀请 ( //*[@text="分享网页邀请"] )', function(){
        return driver.wait('//*[@text="分享网页邀请"]', 30000).click();
    });
    
    it('click: 去提现 ( //*[@resource-id="com.ndol.sale.starter:id/ainf_tixian_Btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ainf_tixian_Btn"]', 30000).click();
    });
    
    it('click: 去提现 ( //*[@resource-id="com.ndol.sale.starter:id/ainf_tixian_Btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ainf_tixian_Btn"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 收货地址 ( //*[@text="收货地址"] )', function(){
        return driver.wait('//*[@text="收货地址"]', 30000).click();
    });
    
    it('click: 编辑 ( //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.TextView )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.TextView', 30000).click();
    });
    
    it('click: 保存 ( //*[@resource-id="com.ndol.sale.starter:id/btn_save_addr"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_save_addr"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_right"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_right"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 意见反馈 ( //*[@text="意见反馈"] )', function(){
        return driver.wait('//*[@text="意见反馈"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/ll_tucao"]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ll_tucao"]/android.widget.ImageView', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 30000).click();
    });
    
    it('click: 意见反馈 ( //*[@text="意见反馈"] )', function(){
        return driver.wait('//*[@text="意见反馈"]', 30000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/ll_praise"]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ll_praise"]/android.widget.ImageView', 30000).click();
    });
    
    it('click: 详情 ( //*[@resource-id="com.bbk.appstore:id/back_title"] )', function(){
        return driver.wait('//*[@resource-id="com.bbk.appstore:id/back_title"]', 30000).click();
    });
    
    it('click: 客服中心 ( //*[@text="客服中心"] )', function(){
        return driver.wait('//*[@text="客服中心"]', 30000).click();
    });
    
    it('click: 以后再说 ( //*[@resource-id="com.ndol.sale.starter:id/jjdxm_update_id_cancel"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/jjdxm_update_id_cancel"]', 30000).click();
    });
    
    it('click: 订单 ( //*[@text="订单"] )', function(){
        return driver.wait('//*[@text="订单"]', 30000).click();
    });
    
    it('click: 夜8 ( //*[@text="夜8"] )', function(){
        return driver.wait('//*[@text="夜8"]', 30000).click();
    });
    
    it('click: 苏宁 ( //*[@text="苏宁"] )', function(){
        return driver.wait('//*[@text="苏宁"]', 30000).click();
    });
    
    it('click: 盒子 ( //*[@text="盒子"] )', function(){
        return driver.wait('//*[@text="盒子"]', 30000).click();
    });
    
    it('click: 预售 ( //*[@text="预售"] )', function(){
        return driver.wait('//*[@text="预售"]', 30000).click();
    });
    
    function _(str){
        return typeof str === 'string' && str.replace(/\{\{(.+?)\}\}/g, function(all, key){
            return testVars[key] || '';
        }) || str;
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    var runtime = process.env['runtime'] || '';
    var config = require(rootPath + '/config'+(runtime?'-'+runtime:'')+'.json');
    var webdriverConfig = Object.assign({},config.webdriver);
    var host = webdriverConfig.host;
    var port = webdriverConfig.port || 4444;
    var testVars = config.vars;

    var screenshotPath = rootPath + '/screenshots';
    var doScreenshot = fs.existsSync(screenshotPath);

    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    var arrDeviceList = getEnvList() || getDeviceList(platformName);
    if(arrDeviceList.length ===0 ){
        console.log('Search mobile device failed!');
        process.exit(1);
    }

    arrDeviceList.forEach(function(device){
        var caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);

        if(doScreenshot){
            mkdirs(path.dirname(screenshotPath + '/' + caseName));
        }

        describe(caseName, function(){

            var stepId = 1;

            this.timeout(600000);
            this.slow(1000);

            before(function(){
                var self = this;
                var driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                self.driver = driver.session({
                    'platformName': platformName,
                    'udid': device.udid,
                    'app': /^(\/|[a-z]:\\)/i.test(appPath) ? appPath : rootPath + '/' + appPath
                });
                self.testVars = testVars;
                return self.driver;
            });

            module.exports();

            afterEach(function(){
                if(doScreenshot){
                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){
                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');
                    }) + '_' + (stepId++) + '.png';
                    return this.driver.getScreenshot(filepath).catch(function(){});
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    var rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function getEnvList(){
    var strEnvList = process.env.devices;
    if(strEnvList){
        return strEnvList.split(/\s*,\s*/).map(function(udid){
            return {udid: udid};
        });
    }
}

function getDeviceList(platformName){
    var arrDeviceList = [];
    var strText, match;
    if(platformName === 'Android')
    {
        // for android
        strText = cp.execSync('adb devices').toString();
        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){
            arrDeviceList.push({
                udid: deviceName
            });
        });
    }
    else{
        // ios real device
        strText = cp.execSync('instruments -s devices').toString();
        strText.replace(/([^\r\n]+)\s+\[(.+?)\]\r?\n/g, function(all, deviceName, udid){
            if(/^(iphone|ipad)/i.test(deviceName)){
                arrDeviceList.push({
                    name: deviceName,
                    udid: udid
                });
            }
        });
        // ios simulator
        strText = cp.execSync('xcrun simctl list devices').toString();
        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
        });
    }
    return arrDeviceList;
}

