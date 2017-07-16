var url = require('url'),
    http = require('http');

var port = +process.argv[2];

function parseTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixTime(time) {
  return {
    unixtime: time.getTime()
  };
}

var server = http.createServer(function(req, res) {
  const {method} = req;
  var parseResult = url.parse(req.url, true),
      receivedDate,
      result;
  if(method === 'GET') {
    // console.log(parseResult);
    switch(parseResult.pathname) {
      case '/api/parsetime':
        if(parseResult.query.iso) {
          receivedDate = new Date(parseResult.query.iso);
          result = parseTime(receivedDate);
        }
        break;

      case '/api/unixtime':
        if(parseResult.query.iso) {
          receivedDate = new Date(parseResult.query.iso);
          result = unixTime(receivedDate);
        }
        break;
      default:
        console.error('unknown endpoints: ' + parseResult.pathname);
    }

    if(result) {
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }
  }

});

server.listen(port);
