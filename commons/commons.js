var path = require('path');
var fs = require('fs');
var cp = require('child_process');
var chai = require("chai");
var JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);

var rootPath = getRootPath();
// 初始化一个全局的dol变量(字符串第一个不能是数字)，后面 所有业务测试中需要用来的全局变量 全部定义到8dol下 
global.dol = {};   


exports.runThisSpec = function(appPath, testcase){
    // read config
    var runtime = process.env.runtime || '';
    var config = require(rootPath + '/config'+(runtime?'-'+runtime:'')+'.json');
    var webdriverConfig = Object.assign({},config.webdriver);
    var host = webdriverConfig.host;
    var port = webdriverConfig.port || 4444;
    var otherConfig = Object.assign({},config.other);
    var reuse = otherConfig.reuse;
    var testVars = config.vars;
    var platformName = /\.apk$/.test(appPath)?'Android':'iOS';
    // console.log("webdriverConfig: " + webdriverConfig);
    console.log("app存放路径: " + appPath);
    console.log("测试系统类型: " + platformName);

    var screenshotPath = rootPath + '/screenshots';
    var doScreenshot = fs.existsSync(screenshotPath);

    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');


    var arrDeviceList = getEnvList() || getDeviceList(platformName);
    if(arrDeviceList.length ===0 ){
        console.log('Search mobile device failed!');
        process.exit(1);
    }

    //支持多设备同时执行
    arrDeviceList.forEach(function(device, index){        
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
                    'reuse': reuse,
                    'platformName': platformName,
                    'udid': device.udid,
                    'app': /^(\/|[a-z]:\\)/i.test(appPath) ? appPath : rootPath + '/' + appPath
                });
                self.testVars = testVars;
                self.platformName = platformName;
                getDeviceSize(platformName, function (deviceSize) {
                    // console.log(deviceSize);
                    // console.log('aaa');
                    self.deviceSize = deviceSize[index];
                });
                return self.driver;
            });

            testcase();

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
};

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

exports.rootPath = rootPath;

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
        	console.log("android测试设备UDID: " + deviceName);
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
        	console.log("IOS测试设备名: " + deviceName);
            console.log("IOS测试设备UDID: " + udid);
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

function getDeviceSize(platformName, callback){
    var deviceSize = [];
    var strText, list;
    if(platformName === 'Android')
    {
        // 对于多台设备  应该是有缺陷的
        strText = cp.execSync('adb shell wm size').toString();
        // console.log(strText);
        list = strText.match(/\d+/g);
        // console.log(list);
        // console.log('AAA');
        //push 是list的方法
        deviceSize.push({
            x: list[0],
            y: list[1]
        });
        // console.log(deviceSize);
    }
    else{
        // ios real device
        deviceSize.push({
            x: 1080,
            y: 1920
        });
    }
    callback(deviceSize);
}

