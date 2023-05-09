exports.paginaInicial = (req, res) => {
     res.render('index');
        
}
exports.postPagina = (req, res) => {
    res.send(`Você enviou o seguinte nome: ${req.body.cliente}`);
}