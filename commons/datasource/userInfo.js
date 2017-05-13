/*
* @Author: caolinming
* @Date:   2017-05-02 10:39:47
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-13 16:04:38
*/

'use strict';

var db = require('../commMysql');

exports.userCount = function (){
	var elementDesc = '查询用户数量';
	var sql = 'select count(1) as count from t_user';
	it(elementDesc, function (){
		db.query(sql, function(err, rows, fields){
			if(err){
				console.log(err);
				return;
			}
			global.userCount = rows[0].count;
			return;
		});
	});
};

exports.getUserId = function (mobile, callback){
	var elementDesc = '根据用户手机号码查询用户id';
	var sql = 'select id from t_user where mobile = ?';
	it(elementDesc, function (){
		db.query(sql, [mobile], function(err, rows, fields){
			if(err){
				console.log(err);
				return;
			}
			global.userId = rows[0].id;
			return;
		});
	});
};

exports.getUserAccountInfo = function (mobile, callback){
	var elementDesc = '根据用户手机号码查询用户的账户信息';
	var sql = 'select a.* from t_user u,t_account a where u.account_id=a.id and mobile = ?';
	it(elementDesc, function (){
		db.query(sql, [mobile], function(err, rows, fields){
			if(err){
				console.log(err);
				return;
			}
			global.dol.userAccountInfo = rows[0];
			// console.log(global.userAccountInfo);
			// console.log(global.userAccountInfo.balance);
			return;
		});
	});
};


exports.getUserAccountInfo2 = function (mobile, callback){
	var elementDesc = '根据用户手机号码查询用户的账户信息';
	var sql = 'select a.* from t_user u,t_account a where u.account_id=a.id and mobile = ?';
		db.query(sql, [mobile], function(err, rows, fields){
			if(err){
				console.log(err);
				return;
			}
			callback(rows[0]);
			// console.log(global.userAccountInfo);
			// console.log(global.userAccountInfo.balance);
			return;
	});
};