function geraNumero(min,max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = 10;


while(rand !== 10){
    rand = geraNumero(min, max);
    console.log(rand);
}
console.log("############");
do{
    rand = geraNumero(min, max);
    console.log(rand);
}while(rand !== 10);