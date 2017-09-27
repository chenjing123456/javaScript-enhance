'use strict';

var a = 1;
a = 2;
console.log(a);

//console.log(b);报错 没有变量提升
var b = void 0;
console.log(b);

//let a ; 不允许重复声明

{
	var c = 'gc';
}
//console.log(c); 存在块级作用域