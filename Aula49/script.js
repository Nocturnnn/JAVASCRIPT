function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

//console.log(duplica(2));
//console.log(triplica(2));
//console.log(quadriplica(2));



function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Ola');
const resto = fala('mundo!');

//console.log(resto);


function soma(a,b){
    return a + b
}
//console.log(5,2);

function soma2(a,b){
    console.log(a+b);
}

function criaPessoa(nome,sobrenome){
    return{nome,sobrenome};
}

const p1 = criaPessoa('Rogerio', 'Ceni');
const p2 = {
    nome: 'João ',
    sobrenome: 'Pessoa'
};

//console.log(p1);
//console.log(p2);
