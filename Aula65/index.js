const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor)=>{
    acumulador += valor;
    return acumulador;
    
});
// console.log(total);

const pessoas = [
    {nome:'Roberto', idade:62},
    {nome:'Douglas', idade:32},
    {nome:'Maria', idade:52},
    {nome:'Janderson', idade:22},
    {nome:'Charles', idade:56},
    {nome:'Beta', idade:78},
    {nome:'Wallace', idade:17},
];

const maisVelha = pessoas.reduce((acumulador,valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);

