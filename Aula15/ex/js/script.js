const numero = Number (prompt('Digite um numero'));

const num = document.getElementById('num');
const raiz = document.getElementById('raiz');
const inte = document.getElementById('inte');
const Nan = document.getElementById('Nan');
const bFloor = document.getElementById('bFloor');
const cCeil = document.getElementById('cCeil');
const deci = document.getElementById('deci');


num.innerHTML = numero;
raiz.innerHTML = `<p> Raiz Quadrada é ${numero ** 0.5} </p>`;
inte.innerHTML = `<p> ${numero} é inteiro ${Number.isInteger(numero)} </p>`;
Nan.innerHTML = `<p> é NAN ${Number.isNaN(numero)} </p>`;
bFloor.innerHTML = `<p> Arredondado para baixo ${Math.floor(numero)}  </p>`;
cCeil.innerHTML = `<p> Arredondado para cima ${Math.ceil(numero)}  </p>`;
deci.innerHTML = `<p> Com duas casas decimais ${numero.toFixed(2)} </p>`;