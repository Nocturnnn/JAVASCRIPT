function Pessoa (nome,sobrenome){
    const ID = 123456;
    const metodoInterno = function() {
        
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um metodo');
    };
}

const p1 = new Pessoa('Richard', 'Charles');
const p2 = new Pessoa('Maria', 'de Carlos');

p2.metodo();