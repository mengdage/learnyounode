var http = require('http'),
    map = require('through2-map');

var port = +process.argv[2];

var server = http.createServer(function(req, res) {
  // check if post request
  const {method} = req;
  if(method === 'POST') {
    req.pipe(map( chunk => chunk.toString().toUpperCase()))
        .pipe(res);
  } else {
    res.end('Send me a POST request.\n')
  }
});

server.listen(port);
