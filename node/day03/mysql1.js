var mysql = require('mysql');
//console.log(mysql);

//创建数据库连接对象
var connection = mysql.createConnection({
	host:'192.168.137.10',
	port:'3306',
	user:'root',
	password:'root',
	database:'web1702'
});
//console.log(connection);
//连接数据库
connection.connect();
//查询数据，对数据库进行操作等
var sql = 'select * from xk_student';
connection.query(sql,function(err,results,fields){
	console.log('回调');
	if(err){
		throw err;
	}else{
		console.log(results);
	}
	//关闭数据库
	connection.end();
});
console.log('..end...');
