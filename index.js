const http = require('http');

let server = http.createServer((req, res) => {
	
	let url = req.url;

	if (url == "/um") {
		res.end("Requisicao UM");	
	} else if (url  == "/dois") {
		res.end("Requisicao DOIS");
	} else {
		res.end("Rota nao existe, erro 404");
	}
	
});

server.listen(3000);