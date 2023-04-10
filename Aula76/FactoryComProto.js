const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
}
const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    }
};

const pessoaPrototype = {...falar, ...comer};

function criaPessoa(nome,sobrenome){
    
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Carlos', 'Eduardo'); 
const p2 = criaPessoa('Maira', 'B');

console.log(p2.falar());