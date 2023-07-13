const { texto, arquivos } = require('./base');

// * (opcional) 0 ou n
// + (obrigatorio) 1 ou mais
// ? (opcional) 0 ou 1
// \ Caractere de escape
// {min, max} Quantidade especifica de ocorrencias

// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1));

const regExp2 = /\.jpe?g/gi

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp2);

    if(!valido) continue;
    console.log(arquivo, '-----' + ' ' + valido);
}