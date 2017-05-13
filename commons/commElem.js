/*
* @Author: caolinming
* @Date:   2017-03-24 09:12:34
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-13 16:31:31
* 通用 元素操作 方法
*/

'use strict';
var chai = require("chai");
var should = chai.should();
var co = require('co');
var eventproxy = require('eventproxy');

var commBrowser = require("./commBrowser");

var driver, testVars, platformName;

before(function(){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
    // console.log("platformName:" + platformName);
});

/*
 * 等待 文本对象的出现
 *
 */
exports.waitText = function (text){
    it('等待: ' + text + ' 的出现；', function(){
        if(platformName === 'Android'){
            return driver.wait('//*[@text="' + text + '"]', 5000);
        }else{
            return driver.wait('//*[@name="' + text + '"]', 5000);
        }
    });
};

/*
 * 等待 文本对象的出现，并点击该 文本按钮或者链接！
 *
 */
exports.clickText = function (text){
    it('点击: ' + text, function(){
        if(platformName === 'Android'){
            return driver.wait('//*[@text="' + text + '"]', 10000).sendElementActions('tap');
        }else{
            return driver.wait('//*[@name="' + text + '"]', 5000).sendElementActions('tap');
        }
    });
};

/*
 * 等待 对象的出现
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.waitElem = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('等待: ' + elementDesc + ' 的出现；', function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime);
        }else{
            return driver.wait(iosElem, waitTime);
        }
    });
};

/*
 * 等待 对象的出现,获取对象的文本信息，并打印出来
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.getAndPrintText = function (parameter, callback){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('获取 : ' + elementDesc + ' 的文本值，', function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).text()
            .then(text => {console.log('文本值为： ' + text);
                callback(text);});  //打印在控制台
        }else{
            return driver.wait(iosElem, waitTime).text()
            .then(text => {console.log('文本值为： ' + text);
                callback(text);});
        }
    });
};




/*
 * 等待 对象的出现,获取对象的rect信息，并打印出来
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.getAndPrintRect = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('获取 : ' + elementDesc + ' 的rect值，', function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).rect().then(_get_element_rect).then(_print);
        }else{
            return driver.wait(iosElem, waitTime).rect().then(_get_element_rect).then(_print);
        }
    });
};

/*
 * 等待 对象的出现,获取对象的rect信息，并打印出来
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * 该方法为  for 循环 ，eventproxy for循环 、闭包、异步回调、promise、co、generator+co 等 模式的 练习方法！
 */
exports.findAndGetAllName = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('获取 : ' + elementDesc + ' 列表中的全部名称，', function (){
        if(platformName === 'Android'){
            var deferred = Promise.defer();
            co(function * (){
                var elem =  yield driver.find(androidElem);
                var length = elem.length;
                var ep = new eventproxy();
                // console.log(length);
                // console.log(ep);
                // console.log(elem);
                // console.log('111');
                ep.after('print goods name list', length, function (list){
                    console.log(list);
                    deferred.resolve();
                });
                // ep.all('text0', 'text1', function (text0, text1){
                //     console.log(text0 + ',' + text1);
                //     done();

                // });
                // elem.get(0).text().then(function (text){
                //     console.log(text);
                //     ep.emit('text0', text);
                // });
                // elem.get(1).text().then(function (text){
                //     console.log(text);
                //     ep.emit('text1', text);
                // });
                // driver.sleep(30000);
                // console.log(n);
                // yield driver.find(androidElem).get(0).text().then(text => {console.log('it :' + text);});
                // yield driver.find(androidElem).get(1).text().then(text => {console.log('it :' + text);});
                // yield driver.find(androidElem).get(2).text().then(text => {console.log('it :' + text);});
                // yield driver.find(androidElem).get(3).text().then(text => {console.log('it :' + text);});
                // yield driver.find(androidElem).get(4).text().then(text => {console.log('it :' + text);});
                for (var i = 0; i < length; i++)
                    {
                        (function (i) {
                            setTimeout(function () {
                                // console.log(i);
                                driver.find(androidElem).get(i).text().then(text =>{
                                    // console.log(text);
                                    // var text1 = i + ':' + text;
                                    ep.emit('print goods name list', i + ':' + text);
                                });
                                
                            }, 300*i);
                        })(i);
                    }

                // for (var i = 0; i < length; i++)
                //     {
                //         (function (i){
                //         co(function * (){
                //             console.log(i);
                //             console.log(androidElem);
                //             // driver.find(androidElem).get(1).text().then(text =>{console.log(text);});
                //             var text = yield driver.find(androidElem).get(1).text();
                //         });

                //             ep.emit('print goods name list', text);
                //             // driver.find(androidElem).get(i).text()
                //             //     .then(function (text){
                //             //         console.log('222');
                //             //         console.log(i + ':' + text);
                //             //         ep.emit('print goods name list', text);
                //             //     });
                //         })(i);
                //     }
                // for (var i = 0; i < length; i++)
                //     {
                //         (function (i){
                //             console.log(i);
                //             // console.log(androidElem);
                //             driver.find(androidElem).get(i).text();
                //                 // .text(function (text){
                //                 //     console.log(i);
                //                 //     console.log('it :' + text);
                //                 //     ep.emit('print goods name list', text);
                //                 // });
                //         })(i);
                //     };
                // for (var i = 0; i < length; i++)
                //     {
                //         (function (i) {
                //             console.log('11');
                //             setTimeout(function (i) {
                //                 console.log(i);
                //                 ep.emit('print goods name list', i);
                //             }, 100);
                //         })(i);
                //     };
                
            }).then(function(){
                // console.log('done!');
                console.log('');
                // deferred.resolve();
            });
            return deferred.promise;
        }else{
            return driver.find(iosElem).then(_print);
        }
    });
};


/*
 * 等待 对象的出现 ,拖拽 至指定 坐标
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param x,y 需要移动到的绝对位置
 */
exports.waitElemDragTo = function (parameter,index,x,y){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('拖拽: 将第 ' + index + ' 个 ' + elementDesc + ' 元素，向x移动到 ' + x + ' ,向y移动到 ' + y, function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).get(index).sendActions('drag', { toX: x, toY: y });
        }else{
            return driver.wait(iosElem, waitTime).get(index).sendActions('drag', { toX: x, toY: y });
        }
    });
};

/*
 * 等待 文本对象的出现 ,向指定 方向 拖拽
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param type 滑动的方向 'up'、down'、'right'、'left'
 * @param index 元素的位标 从 0 开始
 * @param times 移动距离（宽或高）的倍数，默认1
 */
exports.waitTextElemAndSwipe = function (text,type,times){
    var waitTime = 5000;
    var timesL = times || 1;
    var typeL = type || 'up';
    it('拖拽: 将 ' + text + ' 元素，向' + typeL + '拖拽' + timesL + '个自身高度或宽度', function (){
        if(platformName === 'Android'){
            return driver.wait('//*[@text="' + text + '"]', waitTime)
                        .rect()
                        .then(_get_element_rect)
                        .then(function(par){
                            // console.log(par);
                            return commBrowser._swipeByType(par, typeL, timesL);
                        });
        }else{
            return driver.wait('//*[@name="' + text + '"]', waitTime)
                        .rect()
                        .then(_get_element_rect)
                        .then(function(par){
                            // console.log(par);
                            return commBrowser._swipeByType(par, typeL, timesL);
                        });
        }
    });
};



/*
 * 等待 对象的出现 ,向指定 方向 拖拽
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param type 滑动的方向 'up'、down'、'right'、'left'
 * @param index 元素的位标 从 0 开始
 * @param times 移动距离（宽或高）的倍数，默认1
 */
exports.waitElemAndSwipe = function (parameter,type,index,times){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    var indexL = index || 0;
    var timesL = times || 1;
    var typeL = type || 'up';
    it('拖拽: 将第 ' + indexL + ' 个 ' + elementDesc + ' 元素，向' + typeL + '拖拽' + timesL + '个自身高度或宽度', function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).get(indexL)
                        .rect()
                        .then(_get_element_rect)
                        .then(function(par){
                            // console.log(par);
                            return commBrowser._swipeByType(par, typeL, timesL);
                        });
        }else{
            return driver.wait(iosElem, waitTime).get(indexL)
                        .rect()
                        .then(_get_element_rect)
                        .then(function(par){
                            // console.log(par);
                            return commBrowser._swipeByType(par, typeL, timesL);
                        });
        }
    });
};

/*
 * 等待 对象列表 的出现 ,将last 对象移动至 first 对象的位置
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param type 滑动的方向 'up'、down'、'right'、'left'
 * @param index 元素的位标 从 0 开始
 * @param times 移动距离（宽或高）的倍数，默认1
 */
exports.waitElemAndSwipeLastToFrist = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    var index = index || 0;
    var times = times || 1;
    var type = type || 'up';
    it('拖拽: 将第 ' + index + ' 个 ' + elementDesc + ' 元素，向' + type + '拖拽' + times + '个自身高度或宽度', function (){
        if(platformName === 'Android'){
            co(function *(){
                var parFirst = yield driver.wait(androidElem, waitTime).first()
                            .rect()
                            .then(_get_element_rect);
                var parLast = yield driver.wait(androidElem, waitTime).last()
                            .rect()
                            .then(_get_element_rect);
                console.log(parFirst);
                console.log(parLast);
                _swipeElemLastToFirst(parFirst, parLast);
            });
        }else{
            co(function *(){
                var parFirst = yield driver.wait(iosElem, waitTime).first()
                            .rect()
                            .then(_get_element_rect);
                var parLast = yield driver.wait(androidElem, waitTime).last()
                            .rect()
                            .then(_get_element_rect);
                _swipeElemLastToFirst(parFirst, parLast);
            });
        }
    });
};

/*
 * 等待 对象的出现，并点击 该对象 进行操作或跳转！
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.waitAndClick = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('点击: ' + elementDesc, function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).sendElementActions('tap');
        }else{
            return driver.wait(iosElem, waitTime).sendElementActions('tap');
        }
    });
};


/*
 * 等待 对象的出现，并点击 该对象 输入 text 查找
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.waitClickAndAjax = function (parameter, text){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('点击: ' + elementDesc + '输入：' + text + ' 后查找', function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).sendElementActions('tap')
            .sendKeys(_(text));
            // .submit();  //搜索地址，这里采用的 ajax方式  不需要 submit
        }else{
            return driver.wait(iosElem, waitTime).sendElementActions('tap')
            .sendKeys(_(text));
            // .submit();
        }
    });
};

/*
 * 等待 对象的出现，并点击 该对象 输入text 并提交
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.waitClickAndSubmit = function (parameter, text){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('点击: ' + elementDesc + '输入：' + text + ' 后提交', function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).sendElementActions('tap')
            .sendKeys(_(text))
            .submit();  
        }else{
            return driver.wait(iosElem, waitTime).sendElementActions('tap')
            .sendKeys(_(text))
            .submit();
        }
    });
};

/*
 * 等待 列表对象的出现，并按给定的 位标 点击 该对象 进行操作或跳转！
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param index 列表元素对象的 序号，从 0 开始
 */
exports.waitAndGetClick = function (parameter,index){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    var indexl = index || 0;
    it('点击: ' + elementDesc, function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).get(indexl).sendElementActions('tap');
        }else{
            return driver.wait(iosElem, waitTime).sendElementActions('tap');
        }
    });
};

/*
 *查找列表中parameter名称为 name 的对象的序号，并操作该序号下的 元素 parameter2   --未完成
 * 还有一种思路 ，如：找到通过商品名称，找到商品元素的父节点，再找这个父节点下的  子节点 ，添加购物车！
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param index 列表元素对象的 序号，从 0 开始
 */
// exports.waitAndGetClick1 = function (parameter,name,parameter2){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     var androidElem2 = parameter2.androidElem;
//     var iosElem2 = parameter2.iosElem?parameter2.iosElem:parameter2.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc2 = parameter2.elementDesc;
//     it('点击: ' + elementDesc, function (){

//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).get(index).sendElementActions('tap');
//         }else{
//             return driver.wait(iosElem, waitTime).sendElementActions('tap');
//         }
//     });
// };

/*
 * 等待 对象的出现，并双击 该对象 进行操作或跳转！
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.waitAndDoubleClick = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('双击: ' + elementDesc, function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).sendElementActions('doubleTap');
        }else{
            return driver.wait(iosElem, waitTime).sendElementActions('doubleTap');
        }
    });
};


/*
 * 缩小当前元素，捏 ，两指操作缩小 50%   --未测试
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.pinchIn = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('缩小: ' + elementDesc, function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).sendActions('pinch', { direction: "in", percent: 50 });
        }else{
            return driver.wait(iosElem, waitTime).sendActions('pinch', { scale: 2 });
        }
    });
};

/*
 * 放大当前元素，捏 ，两指操作放大 200%   --未测试
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.pinchIn = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('放大: ' + elementDesc, function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).sendActions('pinch', { direction: "out", percent: 200 });
        }else{
            return driver.wait(iosElem, waitTime).sendActions('pinch', { velocity: 1 });
        }
    });
};

/*
 * 等待 元素对象的出现，长按该元素   --未测试
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.waitAndLongClick = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    it('长按: ' + elementDesc, function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).sendActions('press');
        }else{
            return driver.wait(iosElem, waitTime).sendActions('press');
        }
    });
};

// /*
//  * 等待 对象的出现 ,向指定 方向 拖拽  
//  * @param par 元素的坐标信息
//  * @param type 滑动的方向 'up'、down'、'right'、'left'
//  * @param times 元素的位标
//  */
// function _swipeElemByType(par, type, times){
//     var times = times || 1;
//     var type = type || 'up';
//     switch (type)
//     {
//         case 'up': _swipeElemUp(par, times);
//         break;
//         case 'down': _swipeElemDown(par, times);
//         break;
//         case 'right': _swipeElemRight(par, times);
//         break;
//         case 'left': _swipeElemLeft(par, times);
//         break;
//     }
// }

// /*
//  * 滑屏函数，以元素底部中心坐标，向上拖拽自身的高度
//  * @param fromX,fromY 起点的x/y坐标
//  * @param toX,toY 终点的x/y坐标
//  * @param times  滑动距离是 高度的 times 倍
//  */
// function _swipeElemUp(par, times){
//     var times = times || 1;
//     var fromX = par.x_center;
//     var fromY = par.y_down;
//     var toX = par.x_center;
//     var toY = par.y_down - par.height * times;
//     commBrowser.swipe(fromX, fromY, toX, toY);
// }

// /*
//  * 滑屏函数，以元素顶部中心坐标，向下拖拽自身的高度
//  * @param fromX,fromY 起点的x/y坐标
//  * @param toX,toY 终点的x/y坐标
//  * @param times  滑动距离是 高度的 times 倍
//  */
// function _swipeElemDown(par, times){
//     var times = times || 1;
//     var fromX = par.x_center;
//     var fromY = par.y_up;
//     var toX = par.x_center;
//     var toY = par.y_up + par.height * times;
//     commBrowser.swipe(fromX, fromY, toX, toY);
// }

// /*
//  * 滑屏函数，以元素左边中心坐标，向右拖拽自身的宽度
//  * @param fromX,fromY 起点的x/y坐标
//  * @param toX,toY 终点的x/y坐标
//  * @param times  滑动距离是 宽度的 times 倍
//  */
// function _swipeElemRight(par, times){
//     var times = times || 1;
//     var fromX = par.x_left;
//     var fromY = par.y_center;
//     var toX = par.x_left + par.width * times;
//     var toY = par.y_center;
//     commBrowser.swipe(fromX, fromY, toX, toY);
// }

// /*
//  * 滑屏函数，以元素右边中心坐标，向左拖拽自身的宽度
//  * @param fromX,fromY 起点的x/y坐标
//  * @param toX,toY 终点的x/y坐标
//  * @param times  滑动距离是 宽度的 times 倍
//  */
// function _swipeElemLeft(par, times){
//     var times = times || 1;
//     var fromX = par.x_right;
//     var fromY = par.y_center;
//     var toX = par.x_right - par.width * times;
//     var toY = par.y_center;
//     commBrowser.swipe(fromX, fromY, toX, toY);
// }

/*
 * 滑屏函数，从列表的最后一个元素滑动到最前一个元素的位置
 * @param fromX,fromY 起点的x/y坐标
 * @param toX,toY 终点的x/y坐标
 * @param times  滑动距离是 宽度的 times 倍
 */
function _swipeElemLastToFirst(parFirst, parLast){
    var fromX = parLast.x_center; 
    var fromY = parLast.y_center;
    var toX = parFirst.x_center;
    var toY = parFirst.y_center;
    commBrowser.swipe(fromX, fromY, toX, toY, 50);
}

/*
 * 获取元素对象的信息，返回坐标信息
 * @param element 元素对象
 * @return x_center,y_center 元素对象的中心x/y坐标
 * @return x_left,y_up 元素对象的左上角x/y坐标
 * @return x_right,y_down  元素对象的左右下x/y坐标
 */
function _get_element_rect(rect) {
        var x_center,y_center,x_left,y_up,x_right,y_down,width,height;
        x_center = rect.x + rect.width / 2;
        y_center = rect.y + rect.height / 2;
        x_left = rect.x;
        y_up = rect.y;
        x_right = rect.x + rect.width;
        y_down = rect.y + rect.height;
        width = rect.width;
        height = rect.height;
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
        return par;
}

/*
 * 获取 并打印 then 捕获的值
 */
function _print(par){
    console.log(par);
}

function _(str){
    if(typeof str === 'string'){
        return str.replace(/\{\{(.+?)\}\}/g, function (all, key){
            return testVars[key] || '';
        });
    }
    else{
        return str;
    }
}

exports._ = _;
