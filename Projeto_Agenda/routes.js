const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const cadastroController = require('./src/controllers/cadastroController');

//Home Routes
route.get('/', homeController.index);

// Rotas de login
route.get('/login', loginController.index);
route.get('/cadastrar', cadastroController.index);
route.post('/login/register', cadastroController.register)

module.exports = route;