const express = require('express');
const server = express();


//mapeamento de requisição HTTP do tipo GET no contexto raiz 
server.get('/', function(req, res) {
	res.send('<h1>Index!</h1>');
})

//mapeamento de requisição HTTP de qualquer tipo (POST, GET, DELETE, etc.) no contexto /teste 
server.all('/teste', function(req, res) {
	res.send('<h1>TESTE!</h1>');
})

//mapeamento de requisição HTTP do tipo GET em qualquer contexto que contenha a palavra api (conforme expressão regular /api/ 
server.get(/api/, function(req, res) {
	res.send('<h1>API!</h1>');
})

const porta = 3000;
server.listen(porta, () => console.log(`Executando...Porta: ${porta}`));