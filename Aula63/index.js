const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11,15, 22, 27];



const numeros = numbers.filter(valor =>valor > 10
);
//console.log(numeros);

const pessoas = [
    {nome:'Roberto', idade:62},
    {nome:'Douglas', idade:32},
    {nome:'Maria', idade:52},
    {nome:'Janderson', idade:22},
    {nome:'Charles', idade:56},
    {nome:'Beta', idade:78},
    {nome:'Wallace', idade:17},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5 );

const pessoasDeIdade = pessoas.filter(obj => obj.idade >= 50 );

const pessoasComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande);
console.log(pessoasDeIdade);
console.log(pessoasComA);
