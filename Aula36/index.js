//const frutas =['Pera', 'Maça', 'Uva'];

const pessoas = {
    nome: 'Jonas',
    sobrenome: 'Mauricio',
    idade: 30,

    nome1: 'Marcos',
    sobrenome1: 'Mendes',
    idade1: 35
};
for(let chave in pessoas){
    console.log(chave, pessoas[chave]);
}