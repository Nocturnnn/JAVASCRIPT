function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

        },

        fala(assunto= 'falando sobre NADA!'){
            return `${this.nome} está ${assunto}.`
        },
        altura: a,
        peso: p,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Roberto', 'Carlos', 1.6, 70);
const p2 = criaPessoa('Joaquim', 'Carlos', 1.6, 50);
p1.nomeCompleto = 'Jorge Santos Drumont';
console.log(p1.fala());
