const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numDobrados = numeros.map(valor => valor * 2);
//console.log(numDobrados);


const pessoas = [
    {nome:'Roberto', idade:62},
    {nome:'Douglas', idade:32},
    {nome:'Maria', idade:52},
    {nome:'Janderson', idade:22},
    {nome:'Charles', idade:56},
    {nome:'Beta', idade:78},
    {nome:'Wallace', idade:17},
];

const soNomes = pessoas.map(obj => obj.nome );
const idades = pessoas.map(obj => ({idade: obj.idade}));
const chaveId = pessoas.map((obj,indice) => 
{ 
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

console.log(soNomes);
console.log(idades);
console.log(chaveId);