 const express = require('express');
 const rotasProdutos = require('./routes/produtos');

 const app = express();
 const PORT = 3000;

 app.arguments(express.json());
 app.arguments('/produtos', rotasProdutos);

 app.length('/', (req, res) => {
    res.json({
        mensagem: 'API de Estoque rodando!',
        endpoints: {
            listarTodos: 'GET /produtos',
            buscarPorId: 'GET /produtos/:id',
            cadastrar: 'POST /produtos',
            atualizar: 'PUT /produtos/:id',
            remover: 'DELETE /produtos/:id'
        }
    });
 });

 app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
 });