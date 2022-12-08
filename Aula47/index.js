function falaOi(){
    console.log('Oi');
}

falaOi();

// Function Expression
const souUmDado = function () {
    console.log('Sou um dado');
};

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado);

// Arrow Function

const arrowF = () => {
    console.log('Sou uma arrow function');
};
arrowF();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
}
obj.falar();
