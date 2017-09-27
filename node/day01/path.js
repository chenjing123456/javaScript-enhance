var path = require('path');
//console.log(path);

var filename = module.filename;
console.log(filename);
console.log('base:',path.basename(filename));
console.log('dir:',path.dirname(filename));
console.log('ext',path.extname(filename));

var filename1 = 'http://127.23.23.1/poll';
var filename2 = '../source/student/index.js';
var url = path.join(filename1,filename2);
console.log(url);

console.log(__filename);
console.log(__dirname);
