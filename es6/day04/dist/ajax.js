'use strict';

function getJSON(url, resolve, reject) {
	var request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.responseType = 'json';
	//request.setRequestHeader('Accept','application/json')
	//request.setRequestHeader('Content-Type',"application/json;charset=utf-8")
	request.send();
	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			if (request.status == 200) {
				resolve(request.response);
			} else {
				reject(request.status);
			}
		}
	};
}