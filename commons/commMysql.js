/*
* @Author: caolinming
* @Date:   2017-05-02 10:17:13
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-13 16:29:07
*/

'use strict';
var mysql = require('mysql');
var commons = require('./commons');
var db = {};

var runtime = process.env.runtime || '';
var rootPath = commons.rootPath;
var config = require(rootPath + '/config'+(runtime?'-'+runtime:'')+'.json');
var datasourceConfig = Object.assign({},config.datasource);

var connection = mysql.createConnection({
	host     : datasourceConfig.host,
	user     : datasourceConfig.user,
	password : datasourceConfig.password,
	database : datasourceConfig.database
});

db.connect = function (){connection.connect();};
db.end = function (){connection.end();};


// db.query = function(elementDesc, sql, values, callback){
// 	it(elementDesc, function (sql, values, callback){
// 		if (!sql){
// 			callback();
// 			return;
// 		}
// 		var values = values || undefined;
// 		connection.query(sql, values, function(err, rows, fields){
// 			if(err){
// 				console.log(err);
// 				callback(err, null);
// 				return;
// 			};
// 			callback(null, rows, fields);
// 		});
// 	});
// }

db.query = function(sql, values, callback){
	if (!sql){
		callback();
		return;
	}
	var valuesL = values || undefined;
	connection.query(sql, valuesL, function(err, rows, fields){
		if(err){
			console.log(err);
			callback(err, null);
			return;
		}

		callback(null, rows, fields);
	});
};

module.exports = db;
