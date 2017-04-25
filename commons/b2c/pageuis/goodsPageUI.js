/*
* @Author: caolinming
* @Date:   2017-03-24 17:36:35
* @Last Modified by:   caolinming
* @Last Modified time: 2017-04-21 17:10:23
*/

'use strict';

// 商品分类 ，商品列表中 商品的 名称
exports.goodsNamePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout',
        elementDesc: '商品列表子节点框'
};

// 商品分类 ，商品列表中 商品的 名称
exports.goodsNamePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/projuctTitle"]',
        elementDesc: '商品名称'
};

exports.goodsPricePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/projuctPrice"]',
        elementDesc: '商品价格'
};

exports.goodsSaleNumPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/sale_num_txt"]',
        elementDesc: '商品销量'
};

exports.addCartPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/add"]',
        elementDesc: '加入购物车'
};

exports.toCartPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/fab_cart"]',
        //iosElem: '//*[@name="dismissCoupon"]',
        elementDesc: '进入购入车'
};
