var listAndFilter = require('./listAndFilterModule');

var dirname = process.argv[2],
    extname = process.argv[3],
    cb = function(err, data) {
      if(err) {
        console.log(err);
      }
      data.forEach((file) => console.log(file));
    };
listAndFilter(dirname, extname, cb);
