const http = require('http');
const server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('<h1>Acho que &eacute; melhor usar o Express...</h1>');
})

const porta = 7000;

server.listen(porta, function(){
	console.log(`Escutanto a porta ${porta}`);
})