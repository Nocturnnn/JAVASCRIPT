// g - globall (encontra todas as ocorrências)
// i - case insensitive (encontra todas as ocorrências, sem considerar maiúsculas ou minúsculas)
// () - groups
// | - or (ou)


const { texto } = require('./base');

const regExp1 = /(maria|luiz|joão)( e os amigos.)/gi;
const found = regExp1.exec(texto);

if (found) {
    console.log(found[0]);
    console.log(found[1]);
    console.log(found[2]);
} else {
    console.log('Nenhum resultado encontrado');
}


