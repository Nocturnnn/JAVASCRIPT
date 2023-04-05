/*
    let cpf = '705.484.450-52';
    let cpfLimpo = cpf.replace(/\D+/g, '');


    if(cpfLimpo.length !== 11) {
    return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++){
        soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
    }
    let primeiroDigito = 11 - (soma % 11);
    if(primeiroDigito > 9) {

        primeiroDigito = 0;
    }

    soma = 0;
    for(let i=0; i < 10; i++){
        soma+= parseInt(cpfLimpo.charAt(i)) * (11 - i);

    }
    let segundoDigito = 11 - (soma % 11);
    if(segundoDigito > 9) {
        segundoDigito = 0;
    }
    

    if(parseInt(cpfLimpo.charAt(9)) === primeiroDigito && parseInt(cpfLimpo.charAt(10)) === segundoDigito){
        return console.log('Cpf valido');
    }else {
        return console.log('Cpf Invalido');
    }*/

function ValidarCpf(cpfEnviado){
    
        
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        } 
    })

}
ValidarCpf.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    if(this.cpfLimpo !== novoCpf) return false;
    return true;
};
ValidarCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    

    const total = cpfArray.reduce((ac,val) => {
        
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);



    const digito = 11 - (total % 11);
    return digito > 9 ? '0': String(digito);
};
ValidarCpf.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo; 
};

const cpf = new ValidarCpf('705.484.450-52');

console.log(cpf.valida());


    




