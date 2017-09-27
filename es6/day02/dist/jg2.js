'use strict';

var _ = 1,
    foo = _ === undefined ? true : _;

console.log(foo);
var _ref = [1],
    a = _ref[0],
    _ref$ = _ref[1],
    b = _ref$ === undefined ? '1' : _ref$;

console.log(a, b);

//let[bar,fo='1']=[1,undefined];

var bar = 1,
    _undefined = 'undefined',
    fo = _undefined === undefined ? '1' : _undefined;

console.log(bar, fo);