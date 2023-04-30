const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.error(e))

 const p1 = new Pessoa('Sergio');
 console.log(p1);