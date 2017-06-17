var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');

// TCP Client

var net = require('net');

var client = new net.Socket();

client.connect(8080, '192.168.1.11', function() {
	console.log('Connected');
	client.write('R');
	client.write('E');
});
