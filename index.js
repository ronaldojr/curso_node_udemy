const http = require('http');

let server = http.createServer((req, res) => {
	res.end("Requisicao OK");
});

server.listen(3000);