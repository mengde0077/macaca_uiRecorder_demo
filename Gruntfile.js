module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['commons/*.js', 'commons/*/*.js', 'commons/*/*/*.js'],
			options: {
				esversion: 6,  //有效  使用 es6 规范
				mocha: true,
				node: true,
				globals: {
					strict: true,   //ECMAScript 5严格模式  无效
					// globals: true,   //无效
					console: true, //有效 
					require: true,   //有效  不提示 require 未定义
					requirejs: true,
					before: true,   //有效
					maxdepth: 3,   //设置代码最大嵌套深度
					maxerr: 10,    //设置JSHint最大警告数  无效
					mocha: true,   //无效
					it: true,    //有效 不提示 it 未定义
					module: true,  //有效
					exports: true   //有效
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint']);
}
