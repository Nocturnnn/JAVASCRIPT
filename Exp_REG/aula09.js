const { lookahead } = require('./base');

// console.log(lookahead);

// console.log(lookahead.match(/.*[^in]active$/gm));


// Positive lookahead (frases que tem active)
// console.log(lookahead.match(/.+(?=[^in]active)/gm));


// Positive lookahead (frases que tem inactive)
// console.log(lookahead.match(/.+(?=inactive)/gm));


// Negative lookahead (frases que não tem active)
// console.log(lookahead.match(/^(?!.*[^in]active).+$/gm));


// Negative lookahead (frases que não tem inactive)
// console.log(lookahead.match(/^(?!.*inactive).+$/gm));


// Positive lookbehind (Frases que começam com Online)
// console.log(lookahead.match(/(?<=ONLINE\s+)\S.*/gm));


// Negative lookbehind (Frases que não começam com Online)
// console.log(lookahead.match(/^.*(?<!ONLINE.+)$/gm));

const cpf = `
012.250.796-10
111.111.111-11
444.444.444-44
147.285.963-10
abc.sda.asd-dd
`

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}\-\1{2}$)(\d{3}\.){2}\d{3}\-\d{2}$/gm));
