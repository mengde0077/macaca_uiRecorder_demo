/*
* @Author: caolinming
* @Date:   2017-03-24 17:36:35
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-12 15:39:10
*/

'use strict';

// 首页 可点击 进入 选择地址 ，或获取 当前定位地址
exports.locationTitlePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/location_title"]',
        elementDesc: '定位地址'
};

exports.placeeditTvPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/placeedit_tv"]',
        elementDesc: '搜索定位地址'
};
// 点击搜索 地址 中间还跳了一层
exports.searchEditPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/searchEdit"]',
        elementDesc: '搜索定位地址也输入框'
};


exports.locationViewDividerPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/location_view_divider"]',
        elementDesc: '搜索定位地址结果列表'
};

// 首页 首页商品搜索入口 ，点击 进入 搜索页 ，也可以 获取 搜索提示；
exports.goodsSearchPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/search_tip"]',
        elementDesc: '首页商品搜索入口'
};



// 首页/分类页 超市购物车图标 ，是超市购物车入口之一 ，
exports.fabCartPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/fab_cart"]',
        elementDesc: '首页超市购物车图标'
};

// 首页/分类页 超市购物车图标 ，右上角 购物车商品数量 ，
exports.cartBadgePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/cart_badge"]',
        elementDesc: '首页超市购物车商品数量'
};








