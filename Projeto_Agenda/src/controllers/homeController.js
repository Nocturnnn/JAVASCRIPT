exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Esse será o titulo da página',
        numeros: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
        
}
exports.postPagina = (req, res) => {
    res.send(`Você enviou o seguinte nome: ${req.body.cliente}`);
    return;
}