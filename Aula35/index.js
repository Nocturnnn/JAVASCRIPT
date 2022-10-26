const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
    {tag: 'h2', texto: 'Frase 5'}
];
const section = document.querySelector('.container');
const div = document.createElement('div')

for(let i = 0;i<elementos.length; i++){
    let {tag, texto} = elementos[i]
    let p = document.createElement(tag)
    let textoNode = document.createTextNode(texto);
    p.appendChild(textoNode)
    div.appendChild(p);
    
}
section.appendChild(div);

