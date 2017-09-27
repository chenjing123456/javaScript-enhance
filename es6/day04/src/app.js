//import * as poly from 'babel-polyfill';
//import {name,age,gender} from './module1';
import dog from './module4';
//import {name as a,age} from './module1';
import * as person from './module1';
import {sayHello} from './module2';
import seeyou from './module3';
//console.log(a,age);

sayHello();
seeyou();
console.log(dog);

console.log(person);
console.log(person.name);
