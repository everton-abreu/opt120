// src/domains/index.js

const express = require('express');
const usuarios = require('./usuarios');

const routes = express.Router();

routes.use('/usuarios', usuarios);

module.exports = routes;