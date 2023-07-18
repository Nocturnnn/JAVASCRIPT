// Encontra todas as palavras
const palavrasRegEx = /[\wÀ-ú]+/g

// Eliminar Tudo que não e número
const notNumbersRegEx = /\D/;

// Valida IP
const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)/g;

//Expressão CPF
const cpfRegEx = /(\d{3}\.){2}\d{3}\-\d{2}/g

// Valida telefone
const telefoneRegEx = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

// Validar senhas fortes
const validaSenhaFortesRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*\(\)\[\]\{\}\-\=\+]).{8,}$/g

// Validar e-mails

// [^\s]+@[^\s]+\.[^\s]+(\w+)* (Permissiva)

// [^\s\.]+\.?[^\s\.]+@[^\s<>]+\.[^\s<>]+(\w+)* (Semi-Validativa)

// ^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$ (Validativa)

