//当前代码必须在pool.js之前执行
var pool = global.pool;
if(!pool){
	return ;
}

//导入模块
var mysql = require('mysql');


//查询所有学生
function findAllStudent(hander){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		} else {
			var sql = 'select * from xk_student';
			connection.query(sql,function(err,results){
				if(err){
					throw err;
				}else{
					hander.call(this,results);
				}	
			});
			connection.release();
		}
	});
}

function deleteById(id,hander){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		}else{
			var sql = 'select * from xk_student where id = ?';
			connection.query(sql,[id],function(err,results){
				if(err){
					throw err;
				}else{
					hander.call(this,results);
				}
			});
			connection.release();
		}
	});
}

//通过id查询学生
function findById(id,hander){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		} else {
			
			var sql = 'select * from xk_student where id = ?';
			connection.query(sql,[id],function(err,results){
				if(err){
					throw err;
				} else {
					hander.call(this,results);
				}
			});
			connection.release();
		}
	});
}
/*
function save(hander){
	pool.getConnection(function(err,connection){
		if(err){
			throw err;
		}else{
			var sql = 'select * from xk_student';
			connection.query(sql,function(err,results){
				if(err){
					throw err;
				}else{
					hander.call(this,results);
				}
			});
			connection.release();
		}
	});
}
*/

module.exports = {
	findAllStudent:findAllStudent,
	deleteById:deleteById,
	findById:findById
}
