var fs = require('fs'),
    path = require('path');
function listAndFilter(dirname, extname, cb) {
  var ext = '.'+extname;
  fs.readdir(dirname, (err, data) => {
    if(err) {
      // console.log(err);
      return cb(err);
    }
    var filterFiles = data.filter((filename) => path.extname(filename) === ext);
    cb(null, filterFiles);
  })
}

module.exports = listAndFilter;
