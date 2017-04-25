var fs = require('fs');
var path = require('path');
var cp = require('child_process');
var faker  = require('faker');
var chai = require("chai");
var should = chai.should();
var JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);

var rootPath = getRootPath();
var appPath = '/Users/caolinming/Desktop/qita/B2Capk/B2C_3.0.2_110.apk';
var platformName = /\.apk$/.test(appPath)?'Android':'iOS';

module.exports = function(){

    var driver, testVars;

    before(function(){
        var self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('sleep:1000ms',function(){
        return driver.sleep(1000);
    });

    // // 安装时，脚本是在app安装完成后才开始执行的 
    // it('click: 继续安装 ( //*[@text="继续安装"] )', function(){
    //     return driver.wait('//*[@text="继续安装"]', 10000).click();
    // });

    // it('click: 安装 ( //*[@text="安装"] )', function(){
    //     return driver.wait('//*[@text="安装"]', 10000).click();
    // });

    // it('click: 打开 ( //*[@text="打开"] )', function(){
    //     return driver.wait('//*[@text="打开"]', 10000).click();
    // });

    // it('click: 允许 ( //*[@text="允许"] )', function(){
    //     return driver.wait('//*[@text="允许"]', 10000).click();
    // });

    if(driver.wait('//*[@text="以后再说"]', 10000)){
        it('click: 以后再说 ( //*[@text="以后再说"] )', function(){
            return driver.wait('//*[@text="以后再说"]', 10000).click();
    });
    
    // 发现新版本
    it('click: 以后再说 ( //*[@text="以后再说"] )', function(){
        return driver.wait('//*[@text="以后再说"]', 10000).click();
    });

    //新用户注册专享特惠 弹窗
    it('新用户注册专享特惠弹窗',function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_cancel"]', 10000).back();
    }); 

    //新用户注册专享特惠，关闭缩小后图标
    it('新用户注册专享特惠，关闭缩小后图标',function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_scan"]', 10000).back();
    });  

    // //新用户注册专享特惠 弹窗
    // it('新用户注册专享特惠弹窗',function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_cancel"]', 10000).back();
    // }) 

    it('click: 分类', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[2]/android.widget.ImageView', 10000).click();
    });
    
    it('click: 特卖', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[3]/android.widget.ImageView', 10000).click();
    });
    
    // it('关闭登录H5页', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    // });

    //sendKeys  向输入手机号码输入框，输入了   KEYCODE_BAC
    // it('手机回退键',function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).sendKeys('KEYCODE_BACK');
    // })

    // it('等待元素对象出现，再手机回退键',function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).back();
    // });

    it('手机回退键2',function(){
        return driver.back();
    });
    
    
    it('click: 订单', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[4]/android.widget.ImageView', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 我的', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[5]/android.widget.ImageView', 10000).click();
    });
    
    it('click: 首页 ( //*[@text="首页"] )', function(){
        return driver.wait('//*[@text="首页"]', 10000).click();
    });
 
     //新用户注册专享特惠 弹窗
    it('新用户注册专享特惠弹窗',function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_cancel"]', 10000).back();
    });

    it('click: 首页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout/android.widget.ImageView', 10000).click();
    });

    //新用户注册专享特惠，关闭缩小后图标
    it('新用户注册专享特惠，关闭缩小后图标',function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_scan"]', 10000).back();
    });  
    
    it('click: 分类 ( //*[@text="分类"] )', function(){
        return driver.wait('//*[@text="分类"]', 10000).click();
    });
    
    it('click: 分类', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[2]/android.widget.ImageView', 10000).click();
    });
    
    it('click: 特卖 ( //*[@text="特卖"] )', function(){
        return driver.wait('//*[@text="特卖"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });

    it('订单', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[4]/android.widget.ImageView', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 我的', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[5]/android.widget.ImageView', 10000).click();
    });
    
    it('click: 设置 ( //*[@resource-id="com.ndol.sale.starter:id/btn_setting"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_setting"]', 10000).click();
    });
    
    it('click: 帐户安全 ( //*[@text="帐户安全"] )', function(){
        return driver.wait('//*[@text="帐户安全"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 仅WIFI下加载商品图片 ( //*[@text="仅WIFI下加载商品图片"] )', function(){
        return driver.wait('//*[@text="仅WIFI下加载商品图片"]', 10000).click();
    });
    
    it('click: 仅WIFI下加载商品图片 开', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/togbtn_wifi_pic_autoload"]', 10000).click();
    });
    
    it('click: 仅WIFI下加载商品图片 关', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/togbtn_wifi_pic_autoload"]', 10000).click();
    });
    
    // it('× click: 470, 666', function(){
    //     return driver.mouseMove(470, 666).click(0);
    // });
    
    it('click: 为我打分 ( //*[@text="为我打分"] )', function(){
        return driver.wait('//*[@text="为我打分"]', 10000).click();
    });
    
    it('click: 详情 ( //*[@resource-id="com.bbk.appstore:id/back_title"] )', function(){
        return driver.wait('//*[@resource-id="com.bbk.appstore:id/back_title"]', 10000).click();
    });
    
    it('click: 关于我们 ( //*[@text="关于我们"] )', function(){
        return driver.wait('//*[@text="关于我们"]', 10000).click();
    });
    
    it('click: 用户协议 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    });
    
    it('点左上角 返回图标1', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 余额 ( //*[@text="余额"] )', function(){
        return driver.wait('//*[@text="余额"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 佣金 ( //*[@text="佣金"] )', function(){
        return driver.wait('//*[@text="佣金"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 天金 ( //*[@text="天金"] )', function(){
        return driver.wait('//*[@text="天金"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 校花 ( //*[@text="校花"] )', function(){
        return driver.wait('//*[@text="校花"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 夜8 ( //*[@text="夜8"] )', function(){
        return driver.wait('//*[@text="夜8"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 信用盒子 ( //*[@text="信用盒子"] )', function(){
        return driver.wait('//*[@text="信用盒子"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 赚钱 ( //*[@text="赚钱"] )', function(){
        return driver.wait('//*[@text="赚钱"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 红包 ( //*[@text="红包"] )', function(){
        return driver.wait('//*[@text="红包"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 粮包 ( //*[@text="粮包"] )', function(){
        return driver.wait('//*[@text="粮包"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 邀请好友 ( //*[@text="邀请好友"] )', function(){
        return driver.wait('//*[@text="邀请好友"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 收货地址 ( //*[@text="收货地址"] )', function(){
        return driver.wait('//*[@text="收货地址"]', 10000).click();
    });
    
    it('关闭登录H5页', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    });
    
    it('click: 意见反馈 ( //*[@text="意见反馈"] )', function(){
        return driver.wait('//*[@text="意见反馈"]', 10000).click();
    });
    
    it('click: 去吐槽', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ll_tucao"]/android.widget.ImageView', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 意见反馈 ( //*[@text="意见反馈"] )', function(){
        return driver.wait('//*[@text="意见反馈"]', 10000).click();
    });
    
    it('click: 给赞美', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ll_praise"]/android.widget.ImageView', 10000).click();
    });
    
    it('click: 详情 ( //*[@resource-id="com.bbk.appstore:id/back_title"] )', function(){
        return driver.wait('//*[@resource-id="com.bbk.appstore:id/back_title"]', 10000).click();
    });
    
    it('click: 客服中心 ( //*[@text="客服中心"] )', function(){
        return driver.wait('//*[@text="客服中心"]', 10000).click();
    });
    
    // it('click: 以后再说 ( //*[@resource-id="com.ndol.sale.starter:id/jjdxm_update_id_cancel"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/jjdxm_update_id_cancel"]', 10000).click();
    // });

        //新用户注册专享特惠 弹窗
    it('新用户注册专享特惠弹窗',function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_cancel"]', 10000).back();
    });
    
    it('click: 首页 ( //*[@text="首页"] )', function(){
        return driver.wait('//*[@text="首页"]', 10000).click();
    });

    it('新用户注册专享特惠弹窗',function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/mHome_5_3_cancel"]', 10000).back();
    }); 
    
    it('click: 请选择地址 ( //*[@resource-id="com.ndol.sale.starter:id/location_change"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/location_change"]', 10000).click();
    });
    
    it('click: 楚翘城 ( //*[@text="楚翘城"] )', function(){
        return driver.wait('//*[@text="楚翘城"]', 10000).click();
    });
    
    it('click: 休闲零食 ( //*[@text="休闲零食"] )', function(){
        return driver.wait('//*[@text="休闲零食"]', 10000).click();
    });
    
    // 有时候会不出来
    it('click: 全部', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/guide_iknow"]', 10000).click();
    });
    
    it('click: 销量 ( //*[@resource-id="com.ndol.sale.starter:id/buy_sortorder_sales"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/buy_sortorder_sales"]', 10000).click();
    });
    
    it('click: 价格 ( //*[@resource-id="com.ndol.sale.starter:id/buy_sortorder_price"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/buy_sortorder_price"]', 10000).click();
    });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout/android.widget.ImageView', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout/android.widget.ImageView', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_show_type"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_show_type"]', 10000).click();
    // });
    
    it('click: 进口特产 ( //*[@text="进口特产"] )', function(){
        return driver.wait('//*[@text="进口特产"]', 10000).click();
    });
    
    // 添加购物车，定位 有问题！
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.ImageView', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.ImageView', 10000).click();
    // });

    // 添加购物车，定位 有问题！
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/add"]//android.widget.RelativeLayout[2]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.ImageView[1]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/add"]//android.widget.RelativeLayout[2]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]/android.widget.LinearLayout[1]/android.widget.ImageView[1]', 10000).click();
    // });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/fab_cart"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/fab_cart"]', 10000).click();
    });
    
    // it('click: 一键清空 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    // });
    
    // it('click: 确认 ( //*[@resource-id="com.ndol.sale.starter:id/dm_btn_cancel"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/dm_btn_cancel"]', 10000).click();
    // });
    
    it('click: 去逛逛 ( //*[@resource-id="com.ndol.sale.starter:id/cart_empty_btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/cart_empty_btn"]', 10000).click();
    });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.ImageView', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.RelativeLayout/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.ImageView', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/fab_cart"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/fab_cart"]', 10000).click();
    // });
    
    // it('click: 去结算 ( //*[@resource-id="com.ndol.sale.starter:id/buy_submit_btn"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/buy_submit_btn"]', 10000).click();
    // });
    
    // it('click: 使用已有账号登录 ( //*[@resource-id="com.ndol.sale.starter:id/pop_loginway_old"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/pop_loginway_old"]', 10000).click();
    // });
    
    // it('click: 快速注册 ( //*[@resource-id="com.ndol.sale.starter:id/title2"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/title2"]', 10000).click();
    // });
    
    // it('关闭登录H5页', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/close"]', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/aof_address_arrow"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/aof_address_arrow"]', 10000).click();
    // });
    
    // it('click: 到店自提 ( //*[@resource-id="com.ndol.sale.starter:id/tab_pickup"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_pickup"]', 10000).click();
    // });
    
    // it('点左上角 返回图标', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    // });

    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 订单 ( //*[@text="订单"] )', function(){
        return driver.wait('//*[@text="订单"]', 10000).click();
    });

    // it('click: 立即登录 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    // });
    
    it('click: 手机号 ( //*[@resource-id="com.ndol.sale.starter:id/edt_account"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/edt_account"]', 10000).click();
    });
    
    it('val: 18700000001', function(){
        return driver.val('18700000001');
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/edt_password"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/edt_password"]', 10000).click();
    });
    
    it('输入密码: 1234567', function(){
        return driver.val('1234567');
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/togbtn_show_pwd"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/togbtn_show_pwd"]', 10000).click();
    });
    
    it('click: 登录 ( //*[@resource-id="com.ndol.sale.starter:id/btn_login"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_login"]', 10000).click();
    });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/aof_change_arrow"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/aof_change_arrow"]', 10000).click();
    // });
    
    // it('点左上角 返回图标', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    // });
    
    // it('click: 提交订单 ( //*[@resource-id="com.ndol.sale.starter:id/confirm_order_btn"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/confirm_order_btn"]', 10000).click();
    // });
    
    // it('click: 忘记密码？ ( //*[@resource-id="com.ndol.sale.starter:id/dialog_forgetpassword"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/dialog_forgetpassword"]', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/aof_tb_choose"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/aof_tb_choose"]', 10000).click();
    // });
    
    // it('click: 提交订单 ( //*[@resource-id="com.ndol.sale.starter:id/confirm_order_btn"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/confirm_order_btn"]', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.tencent.mm:id/gw"]', function(){
    //     return driver.wait('//*[@resource-id="com.tencent.mm:id/gw"]', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.widget.Button', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.widget.Button', 10000).click();
    // });
    
    // it('click: 取消订单 ( //*[@resource-id="com.ndol.sale.starter:id/btn_cancle"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_cancle"]', 10000).click();
    // });
    
    // it('click: 确定 ( //*[@resource-id="com.ndol.sale.starter:id/dm_btn_cancel"] )', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/dm_btn_cancel"]', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', 10000).click();
    // });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_right"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_right"]', 10000).click();
    // });
    
    // it('点左上角 返回图标', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    // });

    it('click: 订单 ( //*[@text="订单"] )', function(){
        return driver.wait('//*[@text="订单"]', 10000).click();
    });
    
    it('click: 再来一单 ( //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView', 10000).click();
    });
    
    it('click: 一键清空 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    });
    
    it('click: 取消 ( //*[@resource-id="com.ndol.sale.starter:id/dm_btn_ok"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/dm_btn_ok"]', 10000).click();
    });
    
    it('click: 一键清空 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    });
    
    it('click: 确认 ( //*[@resource-id="com.ndol.sale.starter:id/dm_btn_cancel"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/dm_btn_cancel"]', 10000).click();
    });
    
    it('click: 去逛逛 ( //*[@resource-id="com.ndol.sale.starter:id/cart_empty_btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/cart_empty_btn"]', 10000).click();
    });
    
    it('click: 夜8 ( //*[@text="夜8"] )', function(){
        return driver.wait('//*[@text="夜8"]', 10000).click();
    });
    
    it('click: 苏宁 ( //*[@text="苏宁"] )', function(){
        return driver.wait('//*[@text="苏宁"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 夜8 ( //*[@text="夜8"] )', function(){
        return driver.wait('//*[@text="夜8"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 盒子 ( //*[@text="盒子"] )', function(){
        return driver.wait('//*[@text="盒子"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 粮票 ( //*[@text="粮票"] )', function(){
        return driver.wait('//*[@text="粮票"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 预售 ( //*[@text="预售"] )', function(){
        return driver.wait('//*[@text="预售"]', 10000).click();
    });
    
    it('click: 特卖 ( //*[@resource-id="com.ndol.sale.starter:id/tab_layout_channel"]/android.widget.LinearLayout/android.widget.RelativeLayout[6]/android.widget.LinearLayout/android.widget.TextView )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_layout_channel"]/android.widget.LinearLayout/android.widget.RelativeLayout[6]/android.widget.LinearLayout/android.widget.TextView', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/pulllistview"]/android.widget.FrameLayout/android.widget.RelativeLayout', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/tab_layout_channel_arrows"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_layout_channel_arrows"]', 10000).click();
    });
    
    it('click: 特卖 ( //*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[3]/android.widget.TextView )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/basic_tab_footer"]/android.widget.RelativeLayout[3]/android.widget.TextView', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[5]/android.view.View[4]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[5]/android.view.View[4]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[28]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[28]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    it('click: 分类 ( //*[@text="分类"] )', function(){
        return driver.wait('//*[@text="分类"]', 10000).click();
    });
    
    it('click: 进口特产 ( //*[@text="进口特产"] )', function(){
        return driver.wait('//*[@text="进口特产"]', 10000).click();
    });
    
    it('click: 休闲零食 ( //*[@text="休闲零食"] )', function(){
        return driver.wait('//*[@text="休闲零食"]', 10000).click();
    });
    
    it('click: 糖果饼干 ( //*[@text="糖果饼干"] )', function(){
        return driver.wait('//*[@text="糖果饼干"]', 10000).click();
    });
    
    it('click: 饮料牛奶 ( //*[@text="饮料牛奶"] )', function(){
        return driver.wait('//*[@text="饮料牛奶"]', 10000).click();
    });
    
    it('click: 水果冰品 ( //*[@text="水果冰品"] )', function(){
        return driver.wait('//*[@text="水果冰品"]', 10000).click();
    });
    
    it('click: 方便速食 ( //*[@text="方便速食"] )', function(){
        return driver.wait('//*[@text="方便速食"]', 10000).click();
    });
    
    it('click: 生活用品 ( //*[@text="生活用品"] )', function(){
        return driver.wait('//*[@text="生活用品"]', 10000).click();
    });
    
    it('click: 烟酒粮油 ( //*[@text="烟酒粮油"] )', function(){
        return driver.wait('//*[@text="烟酒粮油"]', 10000).click();
    });
    
    it('click: 首页 ( //*[@text="首页"] )', function(){
        return driver.wait('//*[@text="首页"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[3]/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[3]/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout/android.widget.ImageView', 10000).click();
    });
    
    it('click: 确定 ( //*[@resource-id="com.ndol.sale.starter:id/tv_add_save"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_add_save"]', 10000).click();
    });
    
    it('click: 手机党 ( //*[@text="手机党"] )', function(){
        return driver.wait('//*[@text="手机党"]', 10000).click();
    });
    
    it('click: 热销 ( //*[@text="热销"] )', function(){
        return driver.wait('//*[@text="热销"]', 10000).click();
    });
    
    it('click: 新品 ( //*[@text="新品"] )', function(){
        return driver.wait('//*[@text="新品"]', 10000).click();
    });
    
    it('click: 价格 ( //*[@text="价格"] )', function(){
        return driver.wait('//*[@text="价格"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/lay_type_content"]/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/lay_type_content"]/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.ImageView', 10000).click();
    });
    
    it('click: 热销 ( //*[@text="热销"] )', function(){
        return driver.wait('//*[@text="热销"]', 10000).click();
    });
    
    it('click: 新品 ( //*[@text="新品"] )', function(){
        return driver.wait('//*[@text="新品"]', 10000).click();
    });
    
    it('click: 价格 ( //*[@text="价格"] )', function(){
        return driver.wait('//*[@text="价格"]', 10000).click();
    });
    
    it('click: 数码产品', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    // it('click: //*[@resource-id="com.ss.android.article.news:id/li"]', function(){
    //     return driver.wait('//*[@resource-id="com.ss.android.article.news:id/li"]', 10000).click();
    // });
    
    // it('点左上角 返回图标', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    // });
    
    it('click: 配件族 ( //*[@text="配件族"] )', function(){
        return driver.wait('//*[@text="配件族"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 智能生活 ( //*[@text="智能生活"] )', function(){
        return driver.wait('//*[@text="智能生活"]', 10000).click();
    });
    
    it('click: 热销 ( //*[@text="热销"] )', function(){
        return driver.wait('//*[@text="热销"]', 10000).click();
    });
    
    it('click: 新品 ( //*[@text="新品"] )', function(){
        return driver.wait('//*[@text="新品"]', 10000).click();
    });
    
    it('click: 价格 ( //*[@text="价格"] )', function(){
        return driver.wait('//*[@text="价格"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 电脑 ( //*[@text="电脑"] )', function(){
        return driver.wait('//*[@text="电脑"]', 10000).click();
    });
    
    it('click: 热销 ( //*[@text="热销"] )', function(){
        return driver.wait('//*[@text="热销"]', 10000).click();
    });
    
    it('click: 新品 ( //*[@text="新品"] )', function(){
        return driver.wait('//*[@text="新品"]', 10000).click();
    });
    
    it('click: 价格 ( //*[@text="价格"] )', function(){
        return driver.wait('//*[@text="价格"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/lay_hot100_content"]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/lay_hot100_content"]/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.ImageView', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 立即抢购 ( //*[@resource-id="com.ndol.sale.starter:id/maimaimai"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/maimaimai"]', 10000).click();
    });
    
    it('click: 加入购物车 ( //*[@resource-id="com.ndol.sale.starter:id/buy_onekey_btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/buy_onekey_btn"]', 10000).click();
    });
    
    it('click: 去结算 ( //*[@resource-id="com.ndol.sale.starter:id/buy_submit_btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/buy_submit_btn"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/aof_address_arrow"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/aof_address_arrow"]', 10000).click();
    });
    
    it('click: 你的姓名 ( //*[@resource-id="com.ndol.sale.starter:id/edtv_receiver_name"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/edtv_receiver_name"]', 10000).click();
    });
    
    it('val: ceshi', function(){
        return driver.val('ceshi');
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/town_arrows"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/town_arrows"]', 10000).click();
    });
    
    it('click: 全区 ( //*[@resource-id="android:id/text1"] )', function(){
        return driver.wait('//*[@resource-id="android:id/text1"]', 10000).click();
    });
    
    it('click: 详细地址 ( //*[@resource-id="com.ndol.sale.starter:id/edtv_real_where"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/edtv_real_where"]', 10000).click();
    });
    
    it('val: ceshi', function(){
        return driver.val('ceshi');
    });
    
    it('click: 保存 ( //*[@resource-id="com.ndol.sale.starter:id/btn_save_addr"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_save_addr"]', 10000).click();
    });
    
    it('click: 提交订单 ( //*[@resource-id="com.ndol.sale.starter:id/confirm_order_btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/confirm_order_btn"]', 10000).click();
    });
    
    it('click: 确定 ( //*[@resource-id="com.ndol.sale.starter:id/dm_btn_cancel"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/dm_btn_cancel"]', 10000).click();
    });

    //弹出输入支付密码，这里需要一个 回退按键操作
    it('手机回退键2',function(){
        return driver.back();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout/android.widget.ImageView', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[2]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[2]/android.widget.ImageView', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[3]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[3]/android.widget.ImageView', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[4]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_home_container"]/android.widget.RelativeLayout[2]/android.view.View/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[4]/android.widget.RelativeLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[4]/android.widget.ImageView', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[6]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[6]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[11]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[11]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    it('click: 秒杀 ( //*[@resource-id="com.ndol.sale.starter:id/home_item_tile"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/home_item_tile"]', 10000).click();
    });
    
    it('click: 当前位置不在8天服务范... ( //*[@resource-id="com.ndol.sale.starter:id/tv_no_market"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_no_market"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[4]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[4]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[7]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.view.View[7]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.widget.Button', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.widget.Button', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.widget.ListView/android.widget.Button', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/web_layout"]/android.webkit.WebView/android.webkit.WebView/android.widget.ListView/android.widget.Button', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    });
    
    // it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', function(){
    //     return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left1"]', 10000).click();
    // });
    
    it('click: 我的 ( //*[@text="我的"] )', function(){
        return driver.wait('//*[@text="我的"]', 10000).click();
    });

    it('click: 余额 ( //*[@resource-id="com.ndol.sale.starter:id/balance"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/balance"]', 10000).click();
    });
    
    it('click: 余额明细 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    });
    
    it('click: 支出 ( //*[@text="支出"] )', function(){
        return driver.wait('//*[@text="支出"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 充值 ( //*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 佣金 ( //*[@resource-id="com.ndol.sale.starter:id/salary"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/salary"]', 10000).click();
    });
    
    it('click: 佣金转余额 ( //*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 佣金提现 ( //*[@resource-id="com.ndol.sale.starter:id/btn2_tv1"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn2_tv1"]', 10000).click();
    });
    
    it('click: 提现记录 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 不可提现金额 (原工资... ( //*[@resource-id="com.ndol.sale.starter:id/salary_tip"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/salary_tip"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 天金 ( //*[@text="天金"] )', function(){
        return driver.wait('//*[@text="天金"]', 10000).click();
    });
    
    it('click: 天金明细 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    });
    
    it('click: 支出 ( //*[@text="支出"] )', function(){
        return driver.wait('//*[@text="支出"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 兑换 ( //*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn1_tv1"]', 10000).click();
    });
    
    it('click: 大转盘 ( //*[@text="大转盘"] )', function(){
        return driver.wait('//*[@text="大转盘"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 校花 ( //*[@text="校花"] )', function(){
        return driver.wait('//*[@text="校花"]', 10000).click();
    });
    
    it('click: 使用您的8天账户：151... ( //*[@resource-id="com.ndol.sale.starter:id/tv_apply_count"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_apply_count"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/grid"]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/grid"]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.ImageView', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 信用盒子 ( //*[@text="信用盒子"] )', function(){
        return driver.wait('//*[@text="信用盒子"]', 10000).click();
    });
    
    it('click: 允许 ( //*[@resource-id="android:id/button1"] )', function(){
        return driver.wait('//*[@resource-id="android:id/button1"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 赚钱 ( //*[@text="赚钱"] )', function(){
        return driver.wait('//*[@text="赚钱"]', 10000).click();
    });
    
    it('click: 8仔订单 ( //*[@text="8仔订单"] )', function(){
        return driver.wait('//*[@text="8仔订单"]', 10000).click();
    });
    
    it('click: 已发货 ( //*[@resource-id="com.ndol.sale.starter:id/wol_tab_2_tv"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/wol_tab_2_tv"]', 10000).click();
    });
    
    it('click: 已完成 ( //*[@resource-id="com.ndol.sale.starter:id/wol_tab_3_tv"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/wol_tab_3_tv"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 财富 ( //*[@text="财富"] )', function(){
        return driver.wait('//*[@text="财富"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 龙虎榜 ( //*[@text="龙虎榜"] )', function(){
        return driver.wait('//*[@text="龙虎榜"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/partt_8zai_move"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/partt_8zai_move"]', 10000).click();
    });
    
    it('click: 扫码发货 ( //*[@text="扫码发货"] )', function(){
        return driver.wait('//*[@text="扫码发货"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/capture_back"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/capture_back"]', 10000).click();
    });
    
    it('click: 统计 ( //*[@text="统计"] )', function(){
        return driver.wait('//*[@text="统计"]', 10000).click();
    });
    
    it('click: 送单 ( //*[@resource-id="com.ndol.sale.starter:id/btn_tab_order"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_tab_order"]', 10000).click();
    });
    
    it('click: 排班 ( //*[@resource-id="com.ndol.sale.starter:id/btn_tab_schedule"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_tab_schedule"]', 10000).click();
    });
    
    it('click: 应收款 ( //*[@resource-id="com.ndol.sale.starter:id/btn_tab_money"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_tab_money"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/title"]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/title"]/android.widget.ImageView', 10000).click();
    });
    
    it('click: 红包 ( //*[@text="红包"] )', function(){
        return driver.wait('//*[@text="红包"]', 10000).click();
    });
    
    it('click: 拼手气红包 ( //*[@resource-id="com.ndol.sale.starter:id/tab_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tab_right"]', 10000).click();
    });
    
    it('click: 领红包 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_cancle_show"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 粮包 ( //*[@text="粮包"] )', function(){
        return driver.wait('//*[@text="粮包"]', 10000).click();
    });
    
    it('click: 典当 ( //*[@resource-id="com.ndol.sale.starter:id/tv_right"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/tv_right"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 邀请好友 ( //*[@text="邀请好友"] )', function(){
        return driver.wait('//*[@text="邀请好友"]', 10000).click();
    });
    
    it('click: 发送链接邀请 ( //*[@text="发送链接邀请"] )', function(){
        return driver.wait('//*[@text="发送链接邀请"]', 10000).click();
    });
    
    it('click: 取消 ( //*[@resource-id="com.ndol.sale.starter:id/aivf_copy_cancel"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/aivf_copy_cancel"]', 10000).click();
    });
    
    it('click: 我的二维码 ( //*[@text="我的二维码"] )', function(){
        return driver.wait('//*[@text="我的二维码"]', 10000).click();
    });
    
    it('click: 邀请好友扫一扫 ( //*[@text="邀请好友扫一扫"] )', function(){
        return driver.wait('//*[@text="邀请好友扫一扫"]', 10000).click();
    });
    
    it('click: 分享网页邀请 ( //*[@text="分享网页邀请"] )', function(){
        return driver.wait('//*[@text="分享网页邀请"]', 10000).click();
    });
    
    it('click: 去提现 ( //*[@resource-id="com.ndol.sale.starter:id/ainf_tixian_Btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ainf_tixian_Btn"]', 10000).click();
    });
    
    it('click: 去提现 ( //*[@resource-id="com.ndol.sale.starter:id/ainf_tixian_Btn"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ainf_tixian_Btn"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 收货地址 ( //*[@text="收货地址"] )', function(){
        return driver.wait('//*[@text="收货地址"]', 10000).click();
    });
    
    it('click: 编辑 ( //*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.TextView )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/list"]/android.widget.RelativeLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout[2]/android.widget.TextView', 10000).click();
    });
    
    it('click: 保存 ( //*[@resource-id="com.ndol.sale.starter:id/btn_save_addr"] )', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/btn_save_addr"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/iv_right"]', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_right"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 意见反馈 ( //*[@text="意见反馈"] )', function(){
        return driver.wait('//*[@text="意见反馈"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/ll_tucao"]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ll_tucao"]/android.widget.ImageView', 10000).click();
    });
    
    it('点左上角 返回图标', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/iv_left"]', 10000).click();
    });
    
    it('click: 意见反馈 ( //*[@text="意见反馈"] )', function(){
        return driver.wait('//*[@text="意见反馈"]', 10000).click();
    });
    
    it('click: //*[@resource-id="com.ndol.sale.starter:id/ll_praise"]/android.widget.ImageView', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/ll_praise"]/android.widget.ImageView', 10000).click();
    });
    
    it('click: 详情 ( //*[@resource-id="com.bbk.appstore:id/back_title"] )', function(){
        return driver.wait('//*[@resource-id="com.bbk.appstore:id/back_title"]', 10000).click();
    });
    
    it('click: 客服中心 ( //*[@text="客服中心"] )', function(){
        return driver.wait('//*[@text="客服中心"]', 10000).click();
    });
    
    it('升级提示，click: 以后再说', function(){
        return driver.wait('//*[@resource-id="com.ndol.sale.starter:id/jjdxm_update_id_cancel"]', 10000).click();
    });

    
    function _(str){
        return typeof str === 'string' && str.replace(/\{\{(.+?)\}\}/g, function(all, key){
            return testVars[key] || '';
        }) || str;
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    var runtime = process.env['runtime'] || '';
    var config = require(rootPath + '/config'+(runtime?'-'+runtime:'')+'.json');
    var webdriverConfig = Object.assign({},config.webdriver);
    var host = webdriverConfig.host;
    var port = webdriverConfig.port || 4444;
    var testVars = config.vars;

    var screenshotPath = rootPath + '/screenshots';
    var doScreenshot = fs.existsSync(screenshotPath);

    var specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    var arrDeviceList = getEnvList() || getDeviceList(platformName);
    if(arrDeviceList.length ===0 ){
        console.log('Search mobile device failed!');
        process.exit(1);
    }

    arrDeviceList.forEach(function(device){
        var caseName = specName + ' : ' + (device.name?device.name+' ['+device.udid+']':device.udid);

        if(doScreenshot){
            mkdirs(path.dirname(screenshotPath + '/' + caseName));
        }

        describe(caseName, function(){

            var stepId = 1;

            this.timeout(600000);
            this.slow(1000);

            before(function(){
                var self = this;
                var driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                self.driver = driver.session({
                    'platformName': platformName,
                    'udid': device.udid,
                    'app': /^(\/|[a-z]:\\)/i.test(appPath) ? appPath : rootPath + '/' + appPath
                });
                self.testVars = testVars;
                return self.driver;
            });

            module.exports();

            afterEach(function(){
                if(doScreenshot){
                    var filepath = screenshotPath + '/' + caseName.replace(/[^\/]+$/, function(all){
                        return all.replace(/\s*[:\.\:\-\s]\s*/g, '_');
                    }) + '_' + (stepId++) + '.png';
                    return this.driver.getScreenshot(filepath).catch(function(){});
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    var rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
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

function getEnvList(){
    var strEnvList = process.env.devices;
    if(strEnvList){
        return strEnvList.split(/\s*,\s*/).map(function(udid){
            return {udid: udid};
        });
    }
}

function getDeviceList(platformName){
    var arrDeviceList = [];
    var strText, match;
    if(platformName === 'Android')
    {
        // for android
        strText = cp.execSync('adb devices').toString();
        strText.replace(/(.+?)\s+device\r?\n/g, function(all, deviceName){
            arrDeviceList.push({
                udid: deviceName
            });
        });
    }
    else{
        // ios real device
        strText = cp.execSync('instruments -s devices').toString();
        strText.replace(/([^\r\n]+)\s+\[(.+?)\]\r?\n/g, function(all, deviceName, udid){
            if(/^(iphone|ipad)/i.test(deviceName)){
                arrDeviceList.push({
                    name: deviceName,
                    udid: udid
                });
            }
        });
        // ios simulator
        strText = cp.execSync('xcrun simctl list devices').toString();
        strText.replace(/\r?\n\s*(.+?)\s+\((.+?)\) \(Booted\)/g, function(all, deviceName, udid){
            arrDeviceList.push({
                name: deviceName,
                udid: udid
            });
        });
    }
    return arrDeviceList;
}


