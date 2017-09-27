'use strict';

function getJSON(url, hander) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.responseType = 'json';
	//request.setRequestHeader('Accept','application/json')
	//request.setRequestHeader('Content-Type',"application/json;charset=utf-8")
	request.send();
	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			if (request.status == 200) {
				console.log(request);
			} else {
				throw new Error(request.status);
			}
		}
	};
}
//1.未经过promise封装之前的ajax,使用的是回调函数方式调用
getJSON('http://localhost:3000/student/findAll', function () {});