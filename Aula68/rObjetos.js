/*const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Rodrigo'
};

const chave = 'nome';
console.log(pessoa[chave]);*/

/*const pessoa1 = new Object();
pessoa1.nome = 'Carlos';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando o nome`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
}

pessoa1.falarNome();
pessoa1.getDataNascimento();*/

/*function criaPessoa(nome,sobrenome){
    return {
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1 = criaPessoa('Jarson', 'Antonio');
console.log(p1.nomeCompleto());*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}
const p1 = new Pessoa('Luiz', 'Miranda');
delete p1.nome;
console.log(p1);