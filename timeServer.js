var net = require('net'),
    getCurrentTime = require('./getCurrentTime');

var server = net.createServer(function(socket) {
  socket.end(getCurrentTime()+'\n');
}),
    port = +process.argv[2];

// check if valid port number
if(Number.isNaN(port)) {
  console.error('Invalid port number: ', process.argv[2]);
  return;
}

server.listen(port);
