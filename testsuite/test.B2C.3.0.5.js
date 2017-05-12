var commons = require('../commons/commons');
var rootPath = commons.rootPath;
var appPath = '/Users/caolinming/Desktop/qita/B2Capk/b2c_v3.0.5_2017-05-05.apk';
//android 版本 不少页面做了性能优化，出现 3秒展开的页面少了
// var appPath = '/Users/caolinming/Desktop/qita/B2Capp/8Dol_3.0.4.zip';

function testcase(){
    var b2c_mine = require('../testcase/mineTest');
    var b2c_goods = require('../testcase/goodsTest');
    var b2c_order = require('../testcase/orderTest');
    var b2c_home = require('../testcase/homeTest');

    describe('场景合集：基础功能页面遍历', function () {
        describe('场景集：登录前', function () {
            b2c_home.locationTest();
            // b2c_home.unloginDismissCouponTest();
            // b2c_home.unloginStatusToLoginTest();
            // b2c_order.unloginStatusToLoginTest();
            // b2c_mine.unloginStatusToLoginTest();
            // b2c_mine.userSettingTest();
            // b2c_goods.goodsListSwipeTest();
            // b2c_goods.findGoodsByName();

            // b2c_goods.addCartTest();
            // b2c_goods.addCartTest2();   
        });
        
        describe('场景集：登录后', function () {
            // b2c_mine.loginTest();
            // b2c_mine.getUserInfo();
            // b2c_mine.loginStatusToLoginTest();
            // b2c_order.allOrderListTest();
    
            // ************退出登录****************************
            // b2c_mine.loginOffTest();
        });
    });
}


if(module.parent && /mocha\.js/.test(module.parent.id)){
    commons.runThisSpec(appPath, testcase);
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}

