
// Pode usar o spread operator para se copiar o objeto, pois e mais intuitivo
//const outraCoisa = {...produto};
//  ################

//Metodo para copiar o objeto
//const caneca = Object.assign({}, produto);
//  ################

// Copiar so as propriedades forma mais manual
//const caneca = { nome: produto.nome, preco: produto.preco};
//  ################

// Mostras as chaves do objeto
//console.log(Object.keys());
//  ################

// Congela o objeto não podendo mais alterar
// Object.freeze(produto);
//  ################ 

// Descreve as propriedades do objeto
//Object.getOwnPropertyDescriptor(produto, 'nome')
//  ################

// Mostra os valores do Objeto
//Object.value();
//  ################

// Mostra os valores e as chaves
//Object.entries();
//  ################

const produto = {nome: 'Caneca',preco: 50}

console.log(Object.entries(produto));

