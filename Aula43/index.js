function retonaHora(data){
    if( data && !(data instanceof Date)){
        throw new TypeError('Esperando instacia de Date.');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });


}

try{
const data = new Date('01-01-1970 12:58:12');
const hora = retonaHora(11);
console.log(hora);
}catch(err){
    //Tratar error
    //console.log(err);
}finally {
    console.log('Have a good day!');
}





/*try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou error');
    console.log('Fechei o arquivo');

    try{
        console.log(b);
    }catch(err){
        console.log('Deu erro');
    }finally{
        console.log('Tambem é executado');
    }

}
catch(err){
    console.log('Tratando o error');
}finally {
    console.log('Finally e sempre e executado');
}*/