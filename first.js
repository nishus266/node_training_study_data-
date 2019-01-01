var http = require('http');
//var url = require('url');
http.createServer( function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  //var q = url.parse(req.url, true);
  //var g = q.query;
  //console.log(q.host);
  //console.log(g.year);
  res.end("hello");
}).listen(8080);
