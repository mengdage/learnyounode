var http = require('http'),
    fs = require('fs');

var port = +process.argv[2],
    filePath = process.argv[3];
if(Number.isNaN(port)) {
  return;
}

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'content-type': 'text/plain'});
  fs.createReadStream(filePath).pipe(res);
});
server.listen(port);
