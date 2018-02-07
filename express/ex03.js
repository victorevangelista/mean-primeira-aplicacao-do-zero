const express = require('express');
const server = express();
const porta = 3000;

server.use('/api', function(req, res, next) {
	console.log("Inicio...");
	next();
	console.log("Fim...");
})

server.use('/api', function(req, res) {
	console.log('Resposta...');
	res.send('<h1>API!</h1>');
})

server.listen(porta, () => console.log(`Executando...Porta: ${porta}`));

