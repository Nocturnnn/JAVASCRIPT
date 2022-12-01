/*try{
    console.log(naoExisto);
} catch(err) {
    console.log('naoExisto não existe.')
}*/

function soma(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
   throw new ReferenceError('x e y precisam ser números.');
    }


return x+ y;
}

try{
    console.log(soma(1,2));
console.log(soma('a',2));
} catch(err){
    // Não lançar o error para o usuário final, pois pode sofrer tanto de falhas de segurança como não e muito amigavel.
   // console.log(err);
   console.log('Coisa amigavel');
}
