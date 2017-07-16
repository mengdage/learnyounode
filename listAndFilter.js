var fs = require('fs'),
    path = require('path');

var extname = '.'+process.argv[3];
fs.readdir(process.argv[2], (err, data) => {
  if(err) {
    return console.log(err);
  }
  var result = data.filter((filepath) => path.extname(filepath) === extname);
  result.forEach((name) => console.log(name));
});
