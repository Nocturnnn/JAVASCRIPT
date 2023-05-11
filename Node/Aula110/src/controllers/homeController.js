exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
        
}
exports.postPagina = (req, res) => {
    res.send(`Você enviou o seguinte nome: ${req.body.cliente}`);
    return;
}