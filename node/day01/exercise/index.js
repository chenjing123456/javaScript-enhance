console.log(module.id);
console.log('parent',module.parent);
console.log('children',module.children);

console.log(module.filename);
console.log(module.exports);

var module1 = require('./module1');
module1.sayHi();
