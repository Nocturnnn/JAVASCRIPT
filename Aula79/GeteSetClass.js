const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome,limite) {
        this.nome = nome;
        this[_velocidade] = 0;
        this.limite = limite;
    }
    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= this.limite || valor <= 0) return;
        this[_velocidade] = valor;
    }
    get velocidade() {
        return this[_velocidade];
    }
    acelerar() {
        if(this[_velocidade] >= this.limite) return;
        this[_velocidade]++;

    }
    freiar() {
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;  
    }
}

const c1 = new Carro('Fusca', 220);

for(let i = 0; i <= 200; i++){
    c1.acelerar();
}

c1.velocidade = 150;
console.log(c1.velocidade);