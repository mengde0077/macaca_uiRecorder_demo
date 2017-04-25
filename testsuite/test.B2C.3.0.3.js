var commons = require('../commons/commons');
var rootPath = commons.rootPath;
var appPath = '/Users/caolinming/Desktop/qita/B2Capk/b2c_v3.0.3_2017-03-17.apk';
// var appPath = '/Users/caolinming/Desktop/qita/B2Capp/8Dol_3.0.4.zip';

function testcase(){
    var b2c_mine = require('../testcase/mineTest');
    var b2c_goods = require('../testcase/goodsTest');
    var b2c_order = require('../testcase/orderTest');
    var b2c_home = require('../testcase/homeTest');


    // app安装完成，开始执行用例***************************
    // b2c_home.unloginDismissCouponTest();
    // b2c_home.unloginStatusToLoginTest();
    // b2c_order.unloginStatusToLoginTest();
    // b2c_mine.unloginStatusToLoginTest();
    b2c_goods.goodsListSwipeTest();
    // b2c_goods.addCartTest();
    // b2c_goods.addCartTest2();   
    // ************登录前用例****************************
    // b2c_mine.loginTest();
    // b2c_mine.getUserInfo();
    // b2c_order.allOrderListTest();

    // // ************退出登录****************************
    // b2c_mine.loginOffTest();
    
    // 用例执行结束**************************************
}


if(module.parent && /mocha\.js/.test(module.parent.id)){
    commons.runThisSpec(appPath, testcase);
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

