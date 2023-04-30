class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

const nome = 'Simas'
const sobrenome = 'Santos';

//Caso queira exportar vária coisas de uma vez
module.exports = {
    nome, sobrenome, Pessoa
}







// const nome = 'Luiz';
// const sobrenome = 'Roberto';

// const falaNome = () => `${nome} ${sobrenome}`;



// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'Qualquer coisa';