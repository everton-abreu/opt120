// src/domains/usuarios

import express from 'express';
import userController from './controller';

const routes = express.Router();

routes.get('/', userController.get);
routes.post('/', userController.newUser);
routes.get('/:user_id/tarefas', userController.getTasks);

export default routes;