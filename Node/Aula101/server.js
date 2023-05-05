const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action ="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    `);
});
app.post('/', (req,res) => {
    res.send('Recebi o formulario');
})
app.get('/teste', (req,res) => {
    res.send('Teste');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});