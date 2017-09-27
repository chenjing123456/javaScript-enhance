var mysql = require('mysql');
//一个项目创建一个连接池即可

var pool = mysql.createPool({
	host:'192.168.137.10',
	port:'3306',
	user:'root',
	password:'root',
	database:'web1702'
});

//把新创建的连接池赋给全局，那么他就是一个全局对象，可以在任何模块使用
global.pool = pool;

//console.log(pool);
