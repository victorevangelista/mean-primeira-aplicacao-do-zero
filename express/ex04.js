const express = require('express');
const server = express();
const porta = 3000;

server.route('/clientes')
	.get((req, res) => res.send('Lista de Clientes'))
	.post((req, res) => res.send('Novo Cliente'))
	.put((req, res) => res.send('Altera Cliente'))
	.delete((req, res) => res.send('Remove Cliente'))

server.listen(porta, () => console.log(`Executando...Porta: ${porta}`));

