var http = require('http');

var urls = [];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);
var dataArray = [],
    count = 0;

function httpGet(url, index) {
  http.get(url, (res) => {
    var data='';
    res.setEncoding('utf-8');

    res.on('data', (res) => data += res);
    res.on('error', console.error);
    res.on('end', ()=>{
      dataArray[index] = data;
      count += 1;
      if(count === 3) {
        dataArray.forEach((d)=>console.log(d));
      }
    });
  }).on('error', console.error);
}


urls.forEach(httpGet);
