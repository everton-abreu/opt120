// src/domains/dev.js

const express = require('express');
const userController = require('./controller');

const routes = express.Router();

routes.get('/', userController.get);

module.exports = routes;