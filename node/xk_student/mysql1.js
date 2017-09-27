//１．导入mysql模块
var mysql = require('mysql');

//２．创建数据库的连接对象
var connection = mysql.createConnection({
            host:'127.0.0.1',
            port:'3306',
            user:'root',
            password:'root',
            database:'web1702'
        });
//３．链接数据库
connection.connect();
//４．执行查询或更新
var sql = 'select * from xk_student';
connection.query(sql,function(err,results,fields){
            if(err){
                throw err;
            } else{
                console.log(results);
                console.log(fields);
            }
        });
//５．关闭数据库连接
connection.end();






