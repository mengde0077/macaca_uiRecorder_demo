// /*
// * @Author: caolinming
// * @Date:   2017-03-24 09:12:34
// * @Last Modified by:   caolinming
// * @Last Modified time: 2017-04-24 13:51:20
// * 通用操作 对象
// */

// 'use strict';
// var chai = require("chai");
// var should = chai.should();
// var co = require('co');

// var driver, testVars, platformName;

// before(function(){
//     var self = this;
//     driver = self.driver;
//     testVars = self.testVars;
//     platformName = self.platformName;  
//     console.log("platformName:" + platformName);
// });

// /*
//  *等待 文本对象的出现
//  *
//  */
// exports.waitText = function (text){
//     it('等待: ' + text + ' 的出现；', function(){
//         if(platformName === 'Android'){
//             return driver.wait('//*[@text="' + text + '"]', 5000);
//         }else{
//             return driver.wait('//*[@name="' + text + '"]', 5000);
//         };
//     });
// };

// /*
//  *等待 文本对象的出现，并点击该 文本按钮或者链接！
//  *
//  */
// exports.clickText = function (text){
//     it('点击: ' + text, function(){
//         if(platformName === 'Android'){
//             return driver.wait('//*[@text="' + text + '"]', 10000).sendElementActions('tap');
//         }else{
//             return driver.wait('//*[@name="' + text + '"]', 5000).sendElementActions('tap');
//         };
//     });
// };

// /*
//  *等待 对象的出现
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.waitElem = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('等待: ' + elementDesc + ' 的出现；', function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime);
//         }else{
//             return driver.wait(iosElem, waitTime);
//         };
//     });
// };

// /*
//  *等待 对象的出现,获取对象的文本信息，并打印出来
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.getAndPrintText = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('获取 : ' + elementDesc + ' 的文本值，', function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).text()
//             .then(text => {console.log('文本值为： ' + text)});  //打印在控制台
//         }else{
//             return driver.wait(iosElem, waitTime).text()
//             .then(text => {console.log('文本值为： ' + text)});
//         };
//     });
// };

// /*
//  *等待 对象的出现,获取对象的文本信息，并打印出来  -- 好像没啥用
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  *Android iOS Web(WebView). iOS: 'isVisible', 'isAccessible', 'isEnabled', 'type', 'label', 'name', 'value'
//  * prop  的name 支持 Android：'selected', 'description', 'text' enabled、checkable、checked、clickable、focusable、focused、longClickable、scrollable
//  */
// exports.getAndPrintProp = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:4000;
//     it('获取 : ' + elementDesc + ' 的文本值对象，', function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).prop('text')
//             .then(text => {console.log(text)});  //打印在控制台
//         }else{
//             return driver.wait(androidElem, waitTime).prop('name')
//             .then(text => {console.log(text)});
//         };
//     });
// };


// /*
//  *等待 对象的出现,获取对象的rect信息，并打印出来
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.getAndPrintRect = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:4000;
//     it('获取 : ' + elementDesc + ' 的rect值，', function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).rect().then(_get_element_rect).then(_print);
//         }else{
//             return driver.wait(iosElem, waitTime).rect().then(_get_element_rect).then(_print);
//         };
//     });
// };

// /*
//  * 断言：查找对象， enabled （激活状态 ）为已激活
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * enabled:激活属性，selected：可选择属性，displayed：显示属性
//  */
// exports.shouldElemIsEnabled = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:4000;
//     it('获取 : ' + elementDesc + ' 的激活状态为 已激活，', function (){
//         if(platformName === 'Android'){
//             return driver.find(androidElem).enabled()
//                         .should.be.true;
//         }else{
//             return driver.find(iosElem, waitTime).enabled()
//                         .should.be.true;
//         };
//     });
// };

// /*
//  * 断言：查找对象， enabled （激活状态 ）为未激活
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.shouldElemIsNotEnabled = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:4000;
//     it('获取 : ' + elementDesc + ' 的激活状态为 未激活，', function (){
//         if(platformName === 'Android'){
//             return driver.find(androidElem).enabled()
//                         .should.be.false;
//         }else{
//             return driver.find(iosElem, waitTime).enabled()
//                         .should.be.false;
//         };
//     });
// };

// /*
//  *等待 对象的出现 ,拖拽 至指定 坐标
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param x,y 需要移动到的绝对位置
//  */
// exports.waitElemDragTo = function (parameter,index,x,y){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('将第 ' + index + ' 个 ' + elementDesc + ' 元素，向x移动到 ' + x + ' ,向y移动到 ' + y, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).get(index).sendActions('drag', { toX: x, toY: y });
//         }else{
//             return driver.wait(iosElem, waitTime).get(index).sendActions('drag', { toX: x, toY: y });
//         };
//     });
// };

// /*
//  *等待 文本对象的出现 ,向指定 方向 拖拽
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param type 滑动的方向 'up'、down'、'right'、'left'
//  * @param index 元素的位标 从 0 开始
//  * @param times 移动距离（宽或高）的倍数，默认1
//  */
// exports.waitTextElemAndSwipe = function (text,type,times){
//     var waitTime = 5000;
//     var times = times || 1;
//     var type = type || 'up';
//     it('将 ' + text + ' 元素，向' + type + '拖拽' + times + '个自身高度或宽度', function (){
//         if(platformName === 'Android'){
//             return driver.wait('//*[@text="' + text + '"]', waitTime)
//                         .rect()
//                         .then(_get_element_rect)
//                         .then(function(par){
//                             // console.log(par);
//                             return _swipeElemByType(par, type, times);
//                         });
//         }else{
//             return driver.wait('//*[@name="' + text + '"]', waitTime)
//                         .rect()
//                         .then(_get_element_rect)
//                         .then(function(par){
//                             // console.log(par);
//                             return _swipeElemByType(par, type, times);
//                         });
//         };
//     });
// };

// /*
//  *等待 对象的出现 ,向指定 方向 拖拽
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param type 滑动的方向 'up'、down'、'right'、'left'
//  * @param index 元素的位标 从 0 开始
//  * @param times 移动距离（宽或高）的倍数，默认1
//  */
// exports.waitElemAndSwipe = function (parameter,type,index,times){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     var index = index || 0;
//     var times = times || 1;
//     var type = type || 'up';
//     it('将第 ' + index + ' 个 ' + elementDesc + ' 元素，向' + type + '拖拽' + times + '个自身高度或宽度', function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).get(index)
//                         .rect()
//                         .then(_get_element_rect)
//                         .then(function(par){
//                             // console.log(par);
//                             return _swipeElemByType(par, type, times);
//                         });
//         }else{
//             return driver.wait(iosElem, waitTime).get(index)
//                         .rect()
//                         .then(_get_element_rect)
//                         .then(function(par){
//                             // console.log(par);
//                             return _swipeElemByType(par, type, times);
//                         });
//         };
//     });
// };

// /*
//  * 等待 对象列表 的出现 ,将last 对象移动至 first 对象的位置
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param type 滑动的方向 'up'、down'、'right'、'left'
//  * @param index 元素的位标 从 0 开始
//  * @param times 移动距离（宽或高）的倍数，默认1
//  */
// exports.waitElemAndSwipeLastToFrist = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     var index = index || 0;
//     var times = times || 1;
//     var type = type || 'up';
//     it('将第 ' + index + ' 个 ' + elementDesc + ' 元素，向' + type + '拖拽' + times + '个自身高度或宽度', function (){
//         if(platformName === 'Android'){
//             co(function *(){
//                 var parFirst = yield driver.wait(androidElem, waitTime).first()
//                             .rect()
//                             .then(_get_element_rect);
//                 var parLast = yield driver.wait(androidElem, waitTime).last()
//                             .rect()
//                             .then(_get_element_rect);
//                 console.log(parFirst);
//                 console.log(parLast);
//                 _swipeElemLastToFirst(parFirst, parLast);
//             });
//         }else{
//             co(function *(){
//                 var parFirst = yield driver.wait(iosElem, waitTime).first()
//                             .rect()
//                             .then(_get_element_rect);
//                 var parLast = yield driver.wait(androidElem, waitTime).last()
//                             .rect()
//                             .then(_get_element_rect);
//                 _swipeElemLastToFirst(parFirst, parLast);
//             });
//         };
//     });
// };

// /*
//  *等待 对象的出现，并点击 该对象 进行操作或跳转！
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.waitAndClick = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('点击: ' + elementDesc, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).sendElementActions('tap');
//         }else{
//             return driver.wait(iosElem, waitTime).sendElementActions('tap');
//         };
//     });
// };

// /*
//  *等待 列表对象的出现，并按给定的 位标 点击 该对象 进行操作或跳转！
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param index 列表元素对象的 序号，从 0 开始
//  */
// exports.waitAndGetClick = function (parameter,index){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     var index = index || 0;
//     it('点击: ' + elementDesc, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).get(index).sendElementActions('tap');
//         }else{
//             return driver.wait(iosElem, waitTime).sendElementActions('tap');
//         };
//     });
// };


//  *查找列表中parameter名称为 name 的对象的序号，并操作该序号下的 元素 parameter2   --未完成
//  * 还有一种思路 ，如：找到通过商品名称，找到商品元素的父节点，再找这个父节点下的  子节点 ，添加购物车！
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param index 列表元素对象的 序号，从 0 开始
 
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
//         };
//     });
// };

// /*
//  *等待 对象的出现，并双击 该对象 进行操作或跳转！
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.waitAndDoubleClick = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('双击: ' + elementDesc, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).sendElementActions('doubleTap');
//         }else{
//             return driver.wait(iosElem, waitTime).sendElementActions('doubleTap');
//         };
//     });
// };


// /*
//  *等待 对象的出现，获取对象的 text 文本信息，进行 等于 断言
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param textAffirm 断言
//  */
// exports.waitAndEqualAffirm = function (parameter,textAffirm){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('等于断言：获取 ' + elementDesc + ' 的值，应等于 ' + textAffirm, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime)
//                .text()
//                .should.not.be.a('error')
//                .should.equal(_(textAffirm))
//                .then(text => {console.log('文本值为： ' + text)});             
//         }else{
//             return driver.wait(iosElem, waitTime)
//                .text()
//                .should.not.be.a('error')
//                .should.equal(_(textAffirm))
//                .then(text => {console.log('文本值为： ' + text)});    
//         };
//     });
// };

// /*
//  * 在当前页面 对 textAffirm 进行 未显示 断言
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param textAffirm 断言
//  */
// exports.elemCanNotFind = function (textAffirm){
//     it('不存在断言：当前页面不存在文本元素对象 "' + textAffirm + '"', function (){
//         if(platformName === 'Android'){
//             return driver.find('//*[@text="' + textAffirm + '"]')
//                 .should.is.empty;    //判断当前页面没有找到该元素对象
//         }else{
//             return driver.find('//*[@name="' + textAffirm + '"]')
//                 .should.is.empty;
//         };
//     });
// };

// /*
//  * 在当前页面 对 textAffirm 进行 已显示 断言
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param textAffirm 断言
//  */
// exports.elemCanFind = function (textAffirm){
//     it('存在断言：当前页面存在文本元素对象 "' + textAffirm + '"' , function (){
//         if(platformName === 'Android'){
//             return driver.find('//*[@text="' + textAffirm + '"]')
//                 .should.is.not.empty;
//         }else{
//             return driver.find('//*[@name="' + textAffirm + '"]')
//                 .should.is.not.empty;
//         };
//     });
// };

// /*
//  *等待 对象的出现，获取对象的 text 文本信息，进行 包含 断言
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  * @param textAffirm 断言
//  */
// exports.waitAndEqualAffirm = function (parameter,textAffirm){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('等于断言：获取 ' + elementDesc + ' 的值，应等于 ' + textAffirm, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime)
//                .text()
//                .should.not.be.a('error')
//                .should.equal(_(textAffirm))
//                .then(text => {console.log('文本值为： ' + text)});             
//         }else{
//             return driver.wait(iosElem, waitTime)
//                .text()
//                .should.not.be.a('error')
//                .should.equal(_(textAffirm))
//                .then(text => {console.log('文本值为： ' + text)});    
//         };
//     });
// };

// /*
//  * 缩小当前元素，捏 ，两指操作缩小 50%   --未测试
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.pinchIn = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('缩小: ' + elementDesc, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).sendActions('pinch', { direction: "in", percent: 50 });
//         }else{
//             return driver.wait(iosElem, waitTime).sendActions('pinch', { scale: 2 });
//         };
//     });
// };

// /*
//  * 放大当前元素，捏 ，两指操作放大 200%   --未测试
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.pinchIn = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('放大: ' + elementDesc, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).sendActions('pinch', { direction: "out", percent: 200 });
//         }else{
//             return driver.wait(iosElem, waitTime).sendActions('pinch', { velocity: 1 });
//         };
//     });
// };

// /*
//  *等待 元素对象的出现，长按该元素   --未测试
//  * @param androidElem 安卓对应的元素对象的获取方式 及 值 
//  * @param iosElem ios对应的元素对象的获取方式 及 值 
//  * @param elementDesc 控件描述文案
//  * @param waitTime 等待元素对象刷新的 等待时间
//  */
// exports.waitAndLongClick = function (parameter){
//     var androidElem = parameter.androidElem;
//     var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
//     var elementDesc = parameter.elementDesc;
//     var waitTime = parameter.waitTime?parameter.waitTime:5000;
//     it('长按: ' + elementDesc, function (){
//         if(platformName === 'Android'){
//             return driver.wait(androidElem, waitTime).sendActions('press');
//         }else{
//             return driver.wait(iosElem, waitTime).sendActions('press');
//         };
//     });
// };

// /*
//  * 长按坐标   --未测试
//  * @param x,y 坐标
//  */
// exports.longClick = function (x, y){
//     it('长按: ' + elementDesc, function (){
//         if(platformName === 'Android'){
//             return driver.sendActions('press');
//         }else{
//             return driver.sendActions('press');
//         };
//     });
// };

// exports.Back = function (){
//     it('点击: 返回按键', function (){
//         return driver.back();
//     });
// };

// exports.sleep = function (time){
//     it('sleep: ' + time, function (){
//         return driver.sleep(time);
//     });
// };

// /*
//  * Android 报错 Error: the string "Not Found" was thrown, throw an Error :)
//  * @param x,y 坐标
//  */
// exports.touchDown = function (x, y){
//     it('touchDown: x=' + x + ' ,y=' + y , function (){
//         return driver.touchDown(x, y);
//     });
// };

// /*
//  * Android 报错 Error: the string "Not Found" was thrown, throw an Error :)
//  * @param x,y 坐标
//  */
// exports.touchMove = function (x, y){
//     it('touchMove: x=' + x + ' ,y=' + y , function (){
//         return driver.touchMove(x, y);
//     });
// };

// /*
//  * Android 报错  Error: the string "Not Found" was thrown, throw an Error :)
//  * @param x,y 坐标
//  */
// exports.touchUp = function (x, y){
//     it('touchUp: x=' + x + ' ,y=' + y , function (){
//         return driver.touchUp(x, y);
//     });
// };

// /*
//  * Android 报错  Error: the string "Not Found" was thrown, throw an Error :)
//  * @param x,y 坐标
//  */
// exports.touchScroll = function (x, y){
//     it('touchScroll: x=' + x + ' ,y=' + y , function (){
//         return driver.touchScroll(x, y);
//     });
// };

// /*
//  *等待 对象的出现 ,向指定 方向 拖拽  
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
//     };
// };

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
//     _swipe(fromX, fromY, toX, toY);
// };

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
//     _swipe(fromX, fromY, toX, toY);
// };

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
//     _swipe(fromX, fromY, toX, toY);
// };

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
//     _swipe(fromX, fromY, toX, toY);
// };

// /*
//  * 滑屏函数，从列表的最后一个元素滑动到最前一个元素的位置
//  * @param fromX,fromY 起点的x/y坐标
//  * @param toX,toY 终点的x/y坐标
//  * @param times  滑动距离是 宽度的 times 倍
//  */
// function _swipeElemLastToFirst(parFirst, parLast){
//     var fromX = parLast.x_center; 
//     var fromY = parLast.y_center;
//     var toX = parFirst.x_center;
//     var toY = parFirst.y_center;
//     _swipe(fromX, fromY, toX, toY, 5);
// };

// /*
//  * 获取元素对象的信息，返回坐标信息
//  * @param element 元素对象
//  * @return x_center,y_center 元素对象的中心x/y坐标
//  * @return x_left,y_up 元素对象的左上角x/y坐标
//  * @return x_right,y_down  元素对象的左右下x/y坐标
//  */
// function _get_element_rect(rect) {
//         var x_center,y_center,x_left,y_up,x_right,y_down,width,height;
//         x_center = rect['x'] + rect['width'] / 2;
//         y_center = rect['y'] + rect['height'] / 2;
//         x_left = rect['x'];
//         y_up = rect['y'];
//         x_right = rect['x'] + rect['width'];
//         y_down = rect['y'] + rect['height'];
//         width = rect['width'];
//         height = rect['height'];
//         var par = {
//             x_center: x_center,
//             y_center: y_center,
//             x_left: x_left,
//             y_up: y_up,
//             x_right: x_right,
//             y_down: y_down,
//             width: width,
//             height: height
//         };
//         return par;
// };

// /*
//  * 获取 并打印 then 捕获的值
//  */
// function _print(par){
//     console.log(par);
// }

// /*
//  * 滑屏函数，从坐标(fromX,fromY) 滑到坐标(toX,toY)
//  * @param fromX,fromY 起点的x/y坐标
//  * @param toX,toY 终点的x/y坐标
//  * @param steps  滑动查找element是通过指定最大滑动次数（默认10次）steps表示滑动的这个距离分为几步完成，数目越少，滑动幅度越大
//  */
// function _swipe(fromX, fromY, toX, toY, steps){
//         var steps = steps || 10 ;   //默认为  5
//         driver
//         .sendActions('drag', {'fromX': fromX, 'fromY': fromY, 'toX': toX, 'toY': toY, 'steps': steps});
// };

// /*
//  * 滑屏操作，从坐标(fromX,fromY) 滑到坐标(toX,toY)   1 貌似没滑动  输入 5相当于滑动了一次想要的距离
//  * @param fromX,fromY 起点的x/y坐标
//  * @param toX,toY 终点的x/y坐标
//  */
// exports.swipeOnce = function (fromX, fromY, toX, toY){
//     it('滑屏操作: 从(' +  fromX + ',' + fromY + ')滑到(' +  toX + ',' + toY + ')',function (){
//         return _swipe(fromX, fromY, toX, toY, 5);
//     });
// };

// /*
//  * 获取手机屏的尺寸，Android获取不到
//  * @return par.x,par.y 屏幕的宽、高
//  */
// function _get_window_size(windowSize){
//     // driver.size().
//     let y = windowSize['height'];
//     let x = windowSize['width'];
//     var par = {
//         x: x,
//         y: y
//     };
//     console.log(par);
//     console.log('111');
//     return par;
// };

// function _(str){
//     if(typeof str === 'string'){
//         return str.replace(/\{\{(.+?)\}\}/g, function (all, key){
//             return testVars[key] || '';
//         });
//     }
//     else{
//         return str;
//     }
// }

// exports._ = _;
