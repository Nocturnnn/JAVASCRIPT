const { texto } = require('./base');

// const regExp1 = /João|maria/gi;
// const replace = texto.replace(regExp1, 'Felipe');
// const replaceGroups = texto.replace(/(João|maria)/gi, '<b>$1</b>');
const replaceInput = texto.replace(/(João|maria)/gi, function(input) {
    return input.toUpperCase();
});


// console.log(texto.match(regExp1));
// console.log(replace);
// console.log(replaceGroups);
console.log(replaceInput);