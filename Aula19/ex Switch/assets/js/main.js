
const data = new Date();
const h1 = document.querySelector('.container h1');



h1.innerHTML = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(data);