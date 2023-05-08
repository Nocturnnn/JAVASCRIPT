exports.paginaInicial = (req, res) => {
        res.send(`
        <form action ="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Enviar</button>
        `);
}
exports.postPagina = (req, res) => {
    res.send(`Você enviou o seguinte nome: ${req.body.nome}`);
}