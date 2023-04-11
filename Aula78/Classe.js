//Classes

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar() {
        console.log(`${this.nome} está falando`);
      }
      comer() {
          console.log(`${this.nome} está comendo`);
      }
}

//Função Construtora

function Pessoa2(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}



const p1 = new Pessoa('Robert', 'Luiz');
const p2 = new Pessoa2('Luiz', 'Robert');
console.log(p1.falar(), p2.falar());