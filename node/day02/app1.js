var http = require('http');
var urlModule = require('url');
var querystring = require('querystring');

//通过http模块的方法createServer方法创建服务,(服务器软件)，遵从了http协议，用于接受请求，并且发出响应。
//该方法的参数是一个回调函数，这个函数在每次接收到请求的时候都会调用一次。通过监听端口来查看是否有人请求该服务，若是一旦监听到请求则就会调用这个回调函数。
var app = http.createServer(function(req,resp){
	console.log('接受到请求...');
	//console.log(req);
	//1.接收请求路径
	var url = req.url;
	var method = req.method;
	//var host = req.headers.host;
	//console.log(url,method,host);
	console.log(url);  // /course?id=1&name=terry
	
	//通过url模块把路径url转换为对象
	var urlObj = urlModule.parse(url);
	//console.log(urlObj);

	var pathname = urlObj.pathname;  // /courses
	var query = urlObj.query;	// id=1&name=terry 
	resp.writeHead(200,'ok',{'content-type':'text/plain;charset=utf-8'});//服务器写给浏览器的，告诉浏览器我是用utf-8编码并且是文件的形式发送给浏览器的。
	switch(pathname){
		case '/courses':
			resp.write('以下是所有课程的信息:','utf-8');
			// var params = querystring.parse(query);
  			var courses = [{
  				id:1,
  				name:'java',
  				credit:3
  			},{
  				id:2,
  				name:'javascript',
  				credit:3
  			},{
  				id:3,
  				name:'node',
  				credit:4
  			}

  			]
			resp.write(JSON.stringify(courses));
			/*switch(pathname){
				case '/courses/queryById':
					break;
				case '/courses/deleteById':
					break;
				case '/courses/update':
					break;
				case '/courses/save':
					break;
			}*/

			
			break;
		case '/students':
			resp.write('以下是所有学生的信息');
			resp.end();
			break;
		case '/classes':
			resp.write('以下是所有班级的信息');
			resp.end();
			break;
		default:
			resp.end('找不到您请求的资源');
	
	}

});
app.listen(8080,function(){
	console.log('端口为8080的服务已经开启..');
});



//console.log(http);
