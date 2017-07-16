var http = require('http');

var url = process.argv[2];

http.get(url, (res) => {
  var data = '',
      len;
  res.setEncoding('utf-8');
  res.on('data', (chunk) => data += chunk);
  res.on('error', console.error);
  res.on('end', () => {
    len = data.length;
    console.log(len);
    console.log(data);
  });
}).on('err', console.error);
