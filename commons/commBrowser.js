/*
* @Author: caolinming
* @Date:   2017-03-24 09:12:34
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-13 16:25:33
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
    //屏幕尺寸
    deviceSize = self.deviceSize;
    // console.log(deviceSize);
});



/*
 * 长按坐标   --未测试
 * @param x,y 坐标
 */
exports.longClick = function (x, y){
    it('长按: ', function (){
        if(platformName === 'Android'){
            return driver.sendActions('press');
        }else{
            return driver.sendActions('press');
        }
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
        var stepsL = steps || 10 ;   //默认为  10
        driver
        .sendActions('drag', {'fromX': fromX, 'fromY': fromY, 'toX': toX, 'toY': toY, 'steps': stepsL});
}

exports.swipe = function (fromX, fromY, toX, toY, steps){
    _swipe(fromX, fromY, toX, toY, steps);
};

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
 * 滑屏 ,向指定 方向 拖拽 整屏（1），半屏 （0.5）
 * @param type 滑动的方向 'up'、down'、'right'、'left'
 * @param times 移动距离（宽或高）的倍数，默认1
 */
exports.windowSwipe = function (type, times){
    var timesL = times || 1;
    var typeL = type || 'up';
    it('滑屏: 向' + typeL + '滑' + timesL + '屏', function (){
        if(platformName === 'Android'){
            return _get_window_size(function (par) {
                _swipeByType(par, typeL, timesL);
            });
        }else{
            return _get_window_size(function (par) {
                _swipeByType(par, typeL, times);
            });
        }
    });
};

/*
 *  向指定 方向 拖拽  
 * @param par 元素的坐标信息 或者屏的尺寸信息
 * @param type 滑动的方向 'up'、down'、'right'、'left'
 * @param times 元素的位标
 */
function _swipeByType(par, type, times){
    var timesL = times || 1;
    var typeL = type || 'up';
    switch (typeL)
    {
        case 'up': _swipeUp(par, timesL);
        break;
        case 'down': _swipeDown(par, timesL);
        break;
        case 'right': _swipeRight(par, timesL);
        break;
        case 'left': _swipeLeft(par, timesL);
        break;
    }
}

/*
 * 滑屏函数，以元素/屏底部中心坐标，向上拖拽自身的高度
 * @param fromX,fromY 起点的x/y坐标
 * @param toX,toY 终点的x/y坐标
 * @param times  滑动距离是 高度的 times 倍
 */
function _swipeUp(par, times){
    var timesL = times || 1;
    var fromX = par.x_center;
    var fromY = par.y_down;
    var toX = par.x_center;
    var toY = par.y_down - par.height * timesL;
    _swipe(fromX, fromY, toX, toY, 20);
}

/*
 * 滑屏函数，以元素/屏顶部中心坐标，向下拖拽自身的高度
 * @param fromX,fromY 起点的x/y坐标
 * @param toX,toY 终点的x/y坐标
 * @param times  滑动距离是 高度的 times 倍
 */
function _swipeDown(par, times){
    var timesL = times || 1;
    var fromX = par.x_center;
    var fromY = par.y_up;
    var toX = par.x_center;
    var toY = par.y_up + par.height * timesL;
    _swipe(fromX, fromY, toX, toY, 20);
}

/*
 * 滑屏函数，以元素左边中心坐标，向右拖拽自身的宽度 倍数
 * 滑屏函数，以屏左边中心坐标，向右拖拽自身的宽度  <1 
 * @param fromX,fromY 起点的x/y坐标
 * @param toX,toY 终点的x/y坐标
 * @param times  滑动距离是 宽度的 times 倍
 */
function _swipeRight(par, times){
    var timesL = times || 1;
    var fromX = par.x_left;
    var fromY = par.y_center;
    var toX = par.x_left + par.width * timesL;
    var toY = par.y_center;
    _swipe(fromX, fromY, toX, toY, 15);
}

/*
 * 滑屏函数，以元素右边中心坐标，向左拖拽自身的宽度 倍数
 * 滑屏函数，以屏右边中心坐标，向左拖拽自身的宽度  <1 
 * @param fromX,fromY 起点的x/y坐标
 * @param toX,toY 终点的x/y坐标
 * @param times  滑动距离是 宽度的 times 倍
 */
function _swipeLeft(par, times){
    var timesL = times || 1;
    var fromX = par.x_right;
    var fromY = par.y_center;
    var toX = par.x_right - par.width * timesL;
    var toY = par.y_center;
    _swipe(fromX, fromY, toX, toY, 15);
}

/*
 * 获取手机屏的尺寸，Android获取不到  、windowSize 暂时只能获取web的尺寸
 * @return par.x,par.y 屏幕的宽、高
 */
function _get_window_size(callback){
    // driver.size().
        var x_center,y_center,x_left,y_up,x_right,y_down,width,height;
        x_center = deviceSize.x / 2;
        y_center = deviceSize.y / 2;
        x_left = 0;
        y_up = 0;
        x_right = deviceSize.x;
        y_down = deviceSize.y;
        width = deviceSize.x;
        height = deviceSize.y;
        var par = {
            x_center: x_center,
            y_center: y_center,
            x_left: x_left,
            y_up: y_up,
            x_right: x_right,
            y_down: y_down,
            width: width,
            height: height
        };
        callback(par);
}



