let altura = 65;
let largura = 35;
let imagem;

function ePaisagem(){

    if(altura<=600 && largura<=315){
        imagem = false;
    }
    else if(altura>=600 && largura>=315){
        imagem = true;
    }
}

ePaisagem();
console.log(imagem);