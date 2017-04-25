/*
* @Author: caolinming
* @Date:   2017-03-24 17:36:35
* @Last Modified by:   caolinming
* @Last Modified time: 2017-04-11 09:17:20
*/

'use strict';

exports.cancleShowPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]',
        elementDesc: '关闭首页广告弹窗'
};

// 只要当前有开启的新手红包规则，未登录状态下，就会有该窗口
// 3.0.0 -- 3.0.3
exports.dismissCouponPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_cancel"]',
        iosElem: '//*[@name="dismissCoupon"]',
        elementDesc: '新手红包弹窗 的 叉叉'
};

exports.arrowBackPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/iv_left"]',
        iosElem: '//*[@name="arrowBack"]',
        elementDesc: '左上角 返回图标'
};

exports.arrowBack1Par = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]',
        iosElem: '//*[@name="arrowBack"]',
        elementDesc: '左上角 返回图标'
};

exports.closePagePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/close"]',
        iosElem: '//*[@name="dismiss newLogIn"]',
        elementDesc: '关闭新登录H5页'
};