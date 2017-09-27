require('./db/pool');
var studentDB = require('./db/studentDB');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
/*
 * 测试代码
studentDB.findAllStudent(function(results){
	console.log(results);
});

studentDB.findById(1,function(results){
	console.log(results);
});
*/
var server = http.createServer(function(req,resp){
	console.log('接收到了请求');
	var pathname = url.parse(req.url).pathname;
	var query = url.parse(req.url).query;
	var method = req.method;
	switch(pathname){
		case 'students':
			studentDB.findAllStudent(function(results){
				resp.end(JSON.stringify(results));	
			});
			break;
		case 'students/findById':
			break;
		case 'students/deleteById':
			break;
		case 'students/save':
			break;
		default:
	}
});
server.listen(8080,function(){
	console.log('8080端口的服务已经开启');
});
