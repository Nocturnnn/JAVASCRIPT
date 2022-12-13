//IIFE
(function(){
const nome = 'Roberto';
console.log(nome);

const sobrenome = 'Santana';

function criaNome(nome){
return nome + ' ' + sobrenome;
}

function falaNome(){
   console.log(criaNome('Luiz')); 
}

falaNome();


})();

const nome = 'Qualquer coisa';