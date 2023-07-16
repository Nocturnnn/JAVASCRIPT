const { cpfs, ips } = require('./base');

// ^ --> No começo da expressão significa começa com
// $ --> Termina com

const cpf = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g;
const cpf2 = /\d{3}\.\d{3}\.\d{3}\-\d{2}/g;
const cpf3 = /(\d{3}\.){2}\.\d{3}\-\d{2}/g;

const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)/g;

// for (let i = 0; i <= 300; i++) {
//   const ip = `${i}.${i}.${i}.${i}`
//   console.log(ip, ip.match(ipRegEx));
// }

console.log(ips.match(ipRegEx));
console.log(cpfs.match(cpf));

