function retornaFuncao(nome) {
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Jorge');
const funcao2 = retornaFuncao('Ferdinando');
console.log(funcao(), funcao2());