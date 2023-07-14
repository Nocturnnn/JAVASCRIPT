const { html } = require('./base');
const regEx1 = /<.+>.+<\/.>/g;

console.log(html.match(regEx1));
console.log(html.match(/<.+?>.+?<\/.+?>/g));