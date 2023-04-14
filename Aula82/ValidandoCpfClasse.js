class ValidandoCpf {
    constructor(cpf){
        Object.defineProperty(this, 'cpfLimpo', {
                writable: false,
                enumerable: false,
                configurable: false,
                value: cpf.replace(/\D+/g, '')
            })
        
    }
    valida() {
        console.log(this.cpfLimpo);

        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();

       

        if(this.cpfLimpo !== this.novoCpf) return false;

        
        return true;
    }
    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        const digito1 = ValidandoCpf.criaDigito(cpfParcial);
        const digito2 =ValidandoCpf.criaDigito(cpfParcial + digito1);

        this.novoCpf = cpfParcial + digito1 + digito2;

    }
    static criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;

        const total = cpfArray.reduce((ac, val) => {
            ac += (regressivo * Number(val));
            regressivo--;
            return ac;
        }, 0);

        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);

    }
    isSequencia(){
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}

const cpf1 = new ValidandoCpf('070.987.720-03');
console.log(cpf1.valida());