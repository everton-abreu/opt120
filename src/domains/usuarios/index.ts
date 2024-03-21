// src/domains/usuarios

import express from 'express';
import userController from './controller';

const routes = express.Router();

routes.get('/', userController.get);

export default routes;