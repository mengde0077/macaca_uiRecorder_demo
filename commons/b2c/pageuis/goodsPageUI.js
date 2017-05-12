/*
* @Author: caolinming
* @Date:   2017-03-24 17:36:35
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-12 15:38:06
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



// 分类页 商品搜索入口 ，点击 进入 搜索页 ，也可以 获取 搜索提示；
exports.goodsSearchPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/btn_search"]',
        elementDesc: '分类页-商品搜索入口'
};

// 商品搜索子页 *************************************
exports.goodsSearchEditPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/edit_search"]',
        elementDesc: '商品搜索页-输入框'
};
exports.goodsHotSearchTagPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/hot_tag"]',
        elementDesc: '商品搜索页-热门搜索商品列表-tag父节点'
};
exports.goodsHistorySearchTagPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/history_tag"]',
        elementDesc: '商品搜索页-历史搜索商品列表-tag父节点'
};
exports.goodsHotSearchListPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/tv_tag_item_contain"]',
        elementDesc: '商品搜索页-搜索商品列表'
};
exports.goodsSearchCancelPar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/cancel"]',
        elementDesc: '商品搜索页-取消'
};
exports.goodsSearchDeletePar = {
        androidElem: '//*[@resource-id="com.ndol.sale.starter:id/btn_delete"]',
        elementDesc: '商品搜索页-清空搜索历史'
};
// 商品搜索子页 ************end*************************

