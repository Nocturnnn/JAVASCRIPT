function Produto(nome,preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual)  {
    this.preco = this.preco - (this.preco *(percentual/100));
}

Produto.prototype.aumenta = function(percentual)  {
    this.preco = this.preco + (this.preco * (percentual /100));
}


const p1 = new Produto('Camiseta', 50);
p1.desconto(50);
p1.aumenta(100);
console.log(p1);




const p2 = {
    nome: 'Brahma',
    preco: 10
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumenta(100);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho: {
        writable: true,
        configurable: true,
        value: 43
    },
});
p3.desconto(10);
console.log(p3);