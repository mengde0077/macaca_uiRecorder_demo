/*
* @Author: caolinming
* @Date:   2017-05-10 11:28:53
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-13 16:22:28
*/

'use strict';

var https = require('https');


exports.request = function (options, callback, err) {
	var req = https.request(options, (res) => {
		// console.log('状态码：', res.statusCode);     //打印 https协议状态码
		// console.log('请求头：', res.headers);       // 打印 https协议头信息
		// console.log('res ：', res);       // 打印 https协议头信息
	
		res.on('data', (d) => {
			// process.stdout.write(d);
			var djson = JSON.parse(d);    //将字符串 转换为 JSON格式
			// console.log('');
			// console.log(djson.result);
			// console.log(djson.data.msg);
			callback(res.statusCode, djson);
	
		});
	});

	req.on('error', (e) => {
		// console.log(e);
		err(e);
	});
	
	req.end();
};

