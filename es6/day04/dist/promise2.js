'use strict';

var obj1 = {
	name: 'terry',
	then: function then() {
		console.log('this is then ');
	}
};
var p = Promise.resolve(obj1);
console.log(p);

var obj2 = {
	name: 'larry',
	age: 14
};
var p2 = Promise.resolve(obj2);
p2.then(function (data) {
	console.log('this is p2');
});
var obj3 = {
	name: 'ry',
	age: 13
};
var p3 = Promise.reject(obj3);
p3.then(function (data) {
	console.log(data);
}, function (err) {
	console.log("err", err);
});
console.log('end');