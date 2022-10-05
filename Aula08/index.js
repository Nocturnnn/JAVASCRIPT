const nome= 'Luiz Otávio';
const sobrenome = 'Miranda';
let idade = 30;
let peso = 84;
let alturaEmM = 1.80;
let IMC = peso/(alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNascimento},pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${IMC}. `);