var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var chai = require("chai");
var should = chai.should();
var JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);

var rootPath = getRootPath();
var appPath = '/Users/caolinming/Desktop/qita/B2Capk/b2c_v3.0.3_2017-03-17.apk';
var platformName = 'Android';

module.exports = function(){

    var driver, testVars;

    before(function(){
        var self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('tap: //*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_cancel"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_cancel"]', 30000).sendElementActions('tap');
    });

    it('× expect: text, //*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_btn"], equal, 新人红包', function(){
        return driver.sleep(300).wait('//*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_btn"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`新人红包`));
    });

    it('tap: 糖果饼干 ( //*[@text="糖果饼干"] )', function(){
        return driver.wait('//*[@text="糖果饼干"]', 30000).sendElementActions('tap');
    });

    it('× expect: text, //*[@resource-id="com.ndol.sale.starter:id/guide_iknow"], equal, 我知道了', function(){
        return driver.sleep(300).wait('//*[@resource-id="com.ndol.sale.starter:id/guide_iknow"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`我知道了`));
    });

    it('tap: ￥2.5 ( //*[@text="￥2.5"] )', function(){
        return driver.wait('//*[@text="￥2.5"]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="com.ndol.sale.starter:id/reduce"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/reduce"]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[3]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[3]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap: 达利园熊字饼115g ( //*[@text="达利园熊字饼115g"] )', function(){
        return driver.wait('//*[@text="达利园熊字饼115g"]', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[3]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[3]/android.widget.ImageView', 30000).sendElementActions('tap');
    });

    it('tap: //*[@resource-id="com.ndol.sale.starter:id/add"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/add"]', 30000).sendElementActions('tap');
    });

    it('tap: 2 ( //*[@resource-id="com.ndol.sale.starter:id/num_text"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/num_text"]', 30000).sendElementActions('tap');
    });

    it('sendKeys: 10', function(){
        return driver.sendKeys(_(`10`));
    });

    it('tap: //*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', 30000).sendElementActions('tap');
    });

    it('expect: text, //*[@resource-id="com.ndol.sale.starter:id/cart_badge"], equal, 12', function(){
        return driver.sleep(300).wait('//*[@resource-id="com.ndol.sale.starter:id/cart_badge"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`12`));
    });

    it('× expect: text, //*[@resource-id="com.ndol.sale.starter:id/buy_sortorder_sales"], equal, “销量”', function(){
        return driver.sleep(300).wait('//*[@resource-id="com.ndol.sale.starter:id/buy_sortorder_sales"]', 30000)
               .text()
               .should.not.be.a('error')
               .should.equal(_(`“销量”`));
    });

    it('back: ', function(){
        return driver.back();
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    var config = require(rootPath + '/config.json');
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
                    'app': /^(\/|[a-z]:\\|https?:\/\/)/i.test(appPath) ? appPath : rootPath + '/' + appPath
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
        strText = cp.execSync('idevice_id -l').toString();
        strText.replace(/(.+)\r?\n/g, function(all, udid){
            var deviceName = cp.execSync('idevice_id -d '+udid).toString();
            deviceName = deviceName.replace(/\r?\n/g, '');
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
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

