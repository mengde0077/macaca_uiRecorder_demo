/*
* @Author: caolinming
* @Date:   2017-03-24 09:12:34
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-13 16:21:32
* 通用 元素断言 方法
*/

'use strict';
var chai = require("chai");
var should = chai.should();
var co = require('co');

var driver, testVars, platformName;

before(function(){
    var self = this;
    driver = self.driver;
    testVars = self.testVars;
    platformName = self.platformName;  
});


/*
 * 断言：查找对象， enabled （激活状态 ）为已激活
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * enabled:激活属性，selected：可选择属性，displayed：显示属性
 */
exports.shouldElemIsEnabled = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('断言 : ' + elementDesc + ' 的激活状态为 已激活，', function (){
        if(platformName === 'Android'){
            return driver.find(androidElem).enabled()
                        .should.be.true;
        }else{
            return driver.find(iosElem, waitTime).enabled()
                        .should.be.true;
        }
    });
};

/*
 * 断言：查找对象， enabled （激活状态 ）为未激活
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.shouldElemIsNotEnabled = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('断言 : ' + elementDesc + ' 的激活状态为 未激活，', function (){
        if(platformName === 'Android'){
            return driver.find(androidElem).enabled()
                        .should.be.false;
        }else{
            return driver.find(iosElem, waitTime).enabled()
                        .should.be.false;
        }
    });
};

/*
 * 断言：查找对象， selected （激活状态 ）为已选择
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * selected:选择属性，selected：可选择属性，displayed：显示属性
 */
exports.shouldElemIsSelected = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('断言 : ' + elementDesc + ' 的选择状态为 已选择，', function (){
        if(platformName === 'Android'){
            return driver.find(androidElem).selected()
                        .should.be.true;
        }else{
            return driver.find(iosElem, waitTime).selected()
                        .should.be.true;
        }
    });
};

/*
 * 断言：查找对象， selected （选择状态 ）为未选择
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 */
exports.shouldElemIsNotSelected = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('断言 : ' + elementDesc + ' 的选择状态为 未选择，', function (){
        if(platformName === 'Android'){
            return driver.find(androidElem).selected()
                        .should.be.false;
        }else{
            return driver.find(iosElem, waitTime).selected()
                        .should.be.false;
        }
    });
};

/*
 * 在当前页面 对 textAffirm 进行 未显示 断言
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param textAffirm 断言
 */
exports.elemCanNotFind = function (textAffirm){
    it('不存在断言：当前页面不存在文本元素对象 "' + textAffirm + '"', function (){
        if(platformName === 'Android'){
            return driver.find('//*[@text="' + textAffirm + '"]')
                .should.is.empty;    //判断当前页面没有找到该元素对象
        }else{
            return driver.find('//*[@name="' + textAffirm + '"]')
                .should.is.empty;
        }
    });
};

/*
 * 在当前页面 对 textAffirm 进行 已显示 断言
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param textAffirm 断言
 */
exports.elemCanFind = function (textAffirm){
    it('存在断言：当前页面存在文本元素对象 "' + textAffirm + '"' , function (){
        if(platformName === 'Android'){
            return driver.find('//*[@text="' + textAffirm + '"]')
                .should.is.not.empty;
        }else{
            return driver.find('//*[@name="' + textAffirm + '"]')
                .should.is.not.empty;
        }
    });
};

/*
 * 等待 对象的出现，获取对象的 text 文本信息，进行 包含 断言
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param textAffirm 断言
 */
exports.waitAndEqualAffirm = function (parameter,textAffirm){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    // console.log(global.userAccountInfo);
    it('等于断言：获取 ' + elementDesc + ' 的值，应等于 ' + textAffirm, function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime)
               .text()
               .should.not.be.a('error')
               .should.equal(_(textAffirm))
               .then(text => {console.log('文本值为： ' + text);});             
        }else{
            return driver.wait(iosElem, waitTime)
               .text()
               .should.not.be.a('error')
               .should.equal(_(textAffirm))
               .then(text => {console.log('文本值为： ' + text);});    
        }
    });
};

/*
 * 等待 对象的出现，获取对象的 text 文本信息，进行 包含 断言
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param 金额类型
 */
exports.waitAndEqualAccountInfo = function (parameter,type){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:5000;
    var typeL = type || 'balance';
    var textAffirm;
    // console.log(global.userAccountInfo);
    it('等于断言：获取 ' + elementDesc + ' 的值跟数据库中值一致', function (){
        switch (typeL)
        {
            case 'balance': textAffirm = '￥' + global.dol.userAccountInfo.balance.toFixed(2);
            break;
            case 'commission': textAffirm = '￥' + global.dol.userAccountInfo.commission.toFixed(2);
            break;
            case 'loan_balance': textAffirm = '￥' + global.dol.userAccountInfo.loan_balance.toFixed(2);
            break;
            case 'salary': textAffirm = '￥' + global.dol.userAccountInfo.salary.toFixed(2);
            break;
            case 'point': textAffirm = '' + global.dol.userAccountInfo.point;
            break;
        }
        console.log(typeL);
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime)
               .text()
               .should.not.be.a('error')
               .should.equal(_(textAffirm))
               .then(text => {console.log('文本值为： ' + text);});             
        }else{
            return driver.wait(iosElem, waitTime)
               .text()
               .should.not.be.a('error')
               .should.equal(_(textAffirm))
               .then(text => {console.log('文本值为： ' + text);});    
        }
    });
};

/*
 * 断言 对象的 checked 选中属性, 断言 为 已选中状态
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * Android iOS Web(WebView). iOS: 'isVisible', 'isAccessible', 'isEnabled', 'type', 'label', 'name', 'value'
 * prop  的name 支持 Android：'selected', 'description', 'text' enabled、checkable、checked、clickable、focusable、focused、longClickable、scrollable
 */
exports.shouldElemIsShecked = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('获取 : ' + elementDesc + ' 的文本值对象，', function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).prop('checked')
            .should.deep.equal({ checked: true })
            .then(text => {console.log(text);});  //打印在控制台
        }else{
            return driver.wait(androidElem, waitTime).prop('checked')
            .should.deep.equal({ checked: true })
            .then(text => {console.log(text);});  //打印在控制台
        }
    });
};

/*
 * 断言 对象的 checked 选中属性, 断言 为 未选中状态
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * Android iOS Web(WebView). iOS: 'isVisible', 'isAccessible', 'isEnabled', 'type', 'label', 'name', 'value'
 * prop  的name 支持 Android：'selected', 'description', 'text' enabled、checkable、checked、clickable、focusable、focused、longClickable、scrollable
 */
exports.shouldElemIsNotShecked = function (parameter){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('获取 : ' + elementDesc + ' 的文本值对象，', function (){
        if(platformName === 'Android'){
            return driver.wait(androidElem, waitTime).prop('checked')
            .should.deep.equal({ checked: false })
            .then(text => {console.log(text);});  //打印在控制台
        }else{
            return driver.wait(androidElem, waitTime).prop('checked')
            .should.deep.equal({ checked: false })
            .then(text => {console.log(text);});  //打印在控制台
        }
    });
};



/*
 * 断言：查找 元素对象 的个数为 n 个
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param N number 元素对象的个数
 */
exports.shouldElemLenEqual = function (parameter, N){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('断言 : ' + elementDesc + ' 元素对象，在当前页面展示为 ' + N + ' 个', function (){
        if(platformName === 'Android'){
            return driver.find(androidElem)
            .should.have.length(N);
        }else{
            return driver.find(androidElem)
            .should.have.length(N);
        }
    });
};

/*
 * 断言：查找 元素对象 的个数大于 n 个
 * @param androidElem 安卓对应的元素对象的获取方式 及 值 
 * @param iosElem ios对应的元素对象的获取方式 及 值 
 * @param elementDesc 控件描述文案
 * @param waitTime 等待元素对象刷新的 等待时间
 * @param N number 元素对象的个数
 */
exports.shouldElemLenAbove = function (parameter, N){
    var androidElem = parameter.androidElem;
    var iosElem = parameter.iosElem?parameter.iosElem:parameter.androidElem; //如果没有传ios的默认使用Android的
    var elementDesc = parameter.elementDesc;
    var waitTime = parameter.waitTime?parameter.waitTime:4000;
    it('断言 : ' + elementDesc + ' 元素对象，在当前页面展示为 ' + N + ' 个', function (){
        if(platformName === 'Android'){
            return driver.find(androidElem)
            .should.have.length.above(N);
        }else{
            return driver.find(androidElem)
            .should.have.length.above(N);
        }
    });
};

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
