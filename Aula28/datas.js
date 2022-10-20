//const tre = 60*60*3*1000;
//const oneDay = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tre + oneDay);

/*const data  = new Date();
console.log('Dia',data.getDate());
console.log('Mes',data.getMonth());
console.log('Ano',data.getFullYear());
console.log('Hora',data.getHours());
console.log(data.toString());
console.log(data.toString());*/

function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`
}
function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    return `${dia}/${mes}/${ano}`
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);