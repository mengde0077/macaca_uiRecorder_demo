/*
* @Author: caolinming
* @Date:   2017-05-10 11:43:42
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-13 16:04:14
*/

'use strict';
var commAPI = require('../../commAPI.js');
var homeS = require('../apisource/homeS.js');

exports.timeNoticeK = function () {
	it('接口: 请求', function (){
		return commAPI.request(homeS.timeNoticePar, function (statusCode, djson) {
			console.log('statusCode: ' + statusCode);
			console.log('result: ' + djson.result);
			console.log('msg: ' + djson.data.msg);
		});
	});
};