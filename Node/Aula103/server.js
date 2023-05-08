const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {extended: true}));

app.get('/', (req, res) => {
    res.send(`
    <form action ="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar</button>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.query);
    res.send(req.query.profile)
} )
app.post('/', (req,res) => {
    res.send(`O que você enviou foi:${req.body.nome}`);
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});