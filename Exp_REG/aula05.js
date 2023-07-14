const { alfabeto } = require('./base');

// [abc] --> Conjunto [^] --> Negação
// [min-max] --> Ranges
// [min-maxOutraCoisa] --> Ranges
// [^min-maxOutraCoisa] --> Negação de Ranges

console.log(alfabeto);

// console.log(alfabeto.match(/[^abc]+/g));

console.log(alfabeto.match(/[^a-z]/g));

console.log(alfabeto.match(/[a-zA-Z0-9]/g));

console.log(alfabeto.match(/[\wçã]+/g));

console.log(alfabeto.match(/[\s]+/g));

console.log(alfabeto.match(/[\d]+/g));

console.log(alfabeto.match(/[\D]+/g));

console.log(alfabeto.match(/[\u0020-\u002F]/g)); //Unicode

console.log(alfabeto.match(/[\u00E0-\u00FF]/g)); //Unicode de letras
