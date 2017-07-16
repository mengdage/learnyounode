var fs = require('fs');

var filePath = process.argv[2];
var fileString = fs.readFileSync(filePath).toString();

var returnCount = fileString.split('\n').length - 1;

console.log(returnCount);
