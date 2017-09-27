'use strict';

var _module = require('./module4');

var _module2 = _interopRequireDefault(_module);

var _module3 = require('./module1');

var person = _interopRequireWildcard(_module3);

var _module4 = require('./module2');

var _module5 = require('./module3');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//console.log(a,age);

//import * as poly from 'babel-polyfill';
//import {name,age,gender} from './module1';
(0, _module4.sayHello)();
//import {name as a,age} from './module1';

(0, _module6.default)();
console.log(_module2.default);

console.log(person);
console.log(person.name);