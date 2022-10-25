const pessoa = {
    nome: 'a',
    sobrenome: 'b',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 69
    }
};
const { nome, ...resto } = pessoa;
console.log(resto);