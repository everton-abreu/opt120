// src/domains/index.ts

import express from 'express';
import usuarios from './usuarios';
import tarefas from './tarefas';

const routes = express.Router();

routes.use('/usuarios', usuarios);
routes.use('/tarefas', tarefas);

export default routes;
