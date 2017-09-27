var querystring = require('querystring');
var url = require('url');
//console.log(url);
//模拟数据url
var qs ='http://localhost:8080/user?name=za&pwd=123';
//将字符串请求地址转换为url对象
var urlObj = url.parse(qs);

//console.log(urlObj);
//
//获取url对象中的查询字符串
var query = urlObj.query;
console.log(query);


//将查询字符串转换为对象
console.log(querystring.parse(query));


var obj={
	name:'terry',
	age:12
}
console.log(querystring.stringify(obj));
//console.log(querystring);
