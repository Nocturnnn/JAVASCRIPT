function geraNumero(min,max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 0;
const max = 100;
let rand;

function divi(){

    rand = 15;
    console.log(rand);

    
    if(rand % 3===0 && rand % 5===0){
        console.log('FizzBuzz');
    }
    if((rand % 3) === 0){
       console.log("Fizz"); 
    }
    else if((rand % 5)=== 0){
        console.log("Buzz");
    }
    
}

divi();