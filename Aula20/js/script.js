function Escope () {
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado')

const pessoas = [];
    
   function recebeEventoForm (evento){
    evento.preventDefault();

    const Nome = form.querySelector('.nome');
    const Sobrenome = form.querySelector('.sobrenome');
    const Peso = form.querySelector('.peso');
    const Altura = form.querySelector('.altura');

    pessoas.push({
            Nome: Nome.value,
            Sobrenome:Sobrenome.value,
            Peso: Peso.value,
            Altura: Altura.value
    });

    console.log(pessoas);
    resultado.innerHTML += `<p> ${Nome.value}  ${Sobrenome.value} ${Peso.value} ${Altura.value} </p>`
    
    }
    form.addEventListener ('submit', recebeEventoForm); 
}
Escope();