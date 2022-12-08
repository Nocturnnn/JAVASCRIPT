function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '*') acumulador *= numero;
       if (operador === '/') acumulador /= numero;
       
    }
    console.log(acumulador);
}
conta('/', 0, 20,30,40,50);




/*function funcao({valor1, valor2, valor3}) {
   console.log(valor1, valor2, valor3);
}


let obj= {valor1:'Carlos',valor2:'Piloto',valor3: 99}
let array = [1, 2, 3];
funcao(obj);*/