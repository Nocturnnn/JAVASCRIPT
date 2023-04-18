function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject(new Error('BAD VALUE'));
                return;
                }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });


   
}
// Atalho para comentario e CTRL + ;

//      const promises = [
       
//         esperaAi('Promise 1', rand(1,5)),
//         esperaAi('Promise 2', rand(1,5)),
//         esperaAi('Promise 3', rand(1,5)),
//         esperaAi(1000, rand(1,5)),
// ];

function baixaPagina() {
    const emCache = true;

    if(emCache){
        return Promise.resolve('Pagina em cache');
    }
    // if(emCache){
    //     return Promise.reject('Pagina em cache');
    // }
    else {
        return esperaAi('Baixando a pagina', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(err => console.log('ERRO', err));


// Promise.all(promises)
// .then(valor => {
//     console.log(valor);
// })
// .catch(err => {
//     console.log(err);
// })

// Promise.race(promises)
// .then(valor => {
//     console.log(valor);
// })
// .catch(err => {
//     console.log(err);
// })
