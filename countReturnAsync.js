var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
  var returnCount;
  if(err) {
    throw err;
  }
  returnCount = data.split('\n').length -1;
  console.log(returnCount);
});
