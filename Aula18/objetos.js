/*function criaPessoa (nome, sobrenome, idade){
  return{
    nome,sobrenome,idade
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
const pessoa2 = criaPessoa('Rainha', 'Elizabeth', 225);
const pessoa3 = criaPessoa('Luiza', 'Ott', 5);
const pessoa4 = criaPessoa('Luigi', 'avio', 2);
console.log(pessoa1.nome, pessoa2.sobrenome);*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando oi`);
        console.log(`A minha idade atual e ${this.idade}`);
    },
    icreIdade(){
        this.idade++;

    }
}
pessoa1.fala();
pessoa1.icreIdade();
pessoa1.fala();
pessoa1.icreIdade();
pessoa1.fala();
pessoa1.icreIdade();
pessoa1.fala();
pessoa1.icreIdade();
pessoa1.fala();