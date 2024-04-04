// src/domains/tasks

import express from 'express';
import taskController from './controller';

const routes = express.Router();

routes.get('/', taskController.get);

export default routes;