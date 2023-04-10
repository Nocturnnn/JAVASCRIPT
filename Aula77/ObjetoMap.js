const pessoas = [
    { id:3, nome: 'Luiz' },
    { id:2, nome: 'Fernanda' },
    { id:1, nome: 'Sergio' },
];

/*const novasPessoas = {};

for(const {id,nome} of pessoas){
   novasPessoas[id] = {id, nome};
}*/

const novasPessoas = new Map();

for(const {id,nome} of pessoas){
   novasPessoas.set(id, {id,nome});
}

//for(const [identifier,{ id, nome}] of novasPessoas){
//    console.log(identifier, id, nome);
//}

novasPessoas.delete(2)
console.log(novasPessoas.get(2));

