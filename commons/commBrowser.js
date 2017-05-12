/*
* @Author: caolinming
* @Date:   2017-03-24 09:12:34
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-12 16:51:57
* 通用 浏览器或app 操作 方法
*/

'use strict';
var chai = require("chai");
var should = chai.should();
var co = require('co');

var driver, testVars, platformName, deviceSize;

before(function(){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
    deviceSize = self.deviceSize;
    console.log(deviceSize);
});



/*
 * 长按坐标   --未测试
 * @param x,y 坐标
 */
exports.longClick = function (x, y){
    it('长按: ' + elementDesc, function (){
        if(platformName === 'Android'){
            return driver.sendActions('press');
        }else{
            return driver.sendActions('press');
        };
    });
};

exports.Back = function (){
    it('点击: 返回按键', function (){
        return driver.back();
    });
};

exports.sleep = function (time){
    it('sleep: ' + time, function (){
        return driver.sleep(time);
    });
};

/*
 * Android 报错 Error: the string "Not Found" was thrown, throw an Error :)
 * @param x,y 坐标
 */
exports.touchDown = function (x, y){
    it('touchDown: x=' + x + ' ,y=' + y , function (){
        return driver.touchDown(x, y);
    });
};

/*
 * Android 报错 Error: the string "Not Found" was thrown, throw an Error :)
 * @param x,y 坐标
 */
exports.touchMove = function (x, y){
    it('touchMove: x=' + x + ' ,y=' + y , function (){
        return driver.touchMove(x, y);
    });
};

/*
 * Android 报错  Error: the string "Not Found" was thrown, throw an Error :)
 * @param x,y 坐标
 */
exports.touchUp = function (x, y){
    it('touchUp: x=' + x + ' ,y=' + y , function (){
        return driver.touchUp(x, y);
    });
};

/*
 * Android 报错  Error: the string "Not Found" was thrown, throw an Error :)
 * @param x,y 坐标
 */
exports.touchScroll = function (x, y){
    it('touchScroll: x=' + x + ' ,y=' + y , function (){
        return driver.touchScroll(x, y);
    });
};

/*
 * 用例描述说明
 * @param x,y 坐标
 */
exports.testCaseDoc = function (text){
    it('*****用例: ' + text + ' *****', function (){
        return ;
    });
};

/*
 * 滑屏函数，从坐标(fromX,fromY) 滑到坐标(toX,toY)
 * @param fromX,fromY 起点的x/y坐标
 * @param toX,toY 终点的x/y坐标
 * @param steps  滑动查找element是通过指定最大滑动次数（默认10次）steps表示滑动的这个距离分为几步完成，数目越少，滑动幅度越大
 * 数量越多 越能移动相对准确的 坐标距离
 */
function _swipe(fromX, fromY, toX, toY, steps){
        var steps = steps || 10 ;   //默认为  10
        driver
        .sendActions('drag', {'fromX': fromX, 'fromY': fromY, 'toX': toX, 'toY': toY, 'steps': steps});
};

exports.swipe = function (fromX, fromY, toX, toY, steps){
    _swipe(fromX, fromY, toX, toY, steps);
}

/*
 * 滑屏操作，从坐标(fromX,fromY) 滑到坐标(toX,toY)   1 貌似没滑动  输入 5相当于滑动了一次想要的距离
 * @param fromX,fromY 起点的x/y坐标
 * @param toX,toY 终点的x/y坐标
 */
exports.swipeOnce = function (fromX, fromY, toX, toY){
    it('滑屏操作: 从(' +  fromX + ',' + fromY + ')滑到(' +  toX + ',' + toY + ')',function (){
        return _swipe(fromX, fromY, toX, toY, 5);
    });
};

/*
 * 获取手机屏的尺寸，Android获取不到
 * @return par.x,par.y 屏幕的宽、高
 */
function _get_window_size(windowSize){
    // driver.size().
    let y = windowSize['height'];
    let x = windowSize['width'];
    var par = {
        x: x,
        y: y
    };
    console.log(par);
    console.log('111');
    return par;
};



