var mysql = require('mysql');
//创建连接池
var pool = mysql.createPool({
	host:'192.168.137.10',
	port:'3306',
	database:'web1702',
	user:'root',
	password:'root'
});

//获取连接
pool.getConnection(function(err,connection){
	if(err){
		throw err;
	} else {
		//数据库操作
		var sql = 'select * from xk_course';
		connection.query(sql,function(err,results){
			if(err){
				throw err;
			} else {
				console.log(results);
			}
		});
		//释放连接对象到连接池中，供下次使用
		connection.release();
		//关闭连接池，释放连接池中所有连接
		pool.end();
	}
});


