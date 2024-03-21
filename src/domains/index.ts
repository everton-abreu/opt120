// src/domains/index.ts

import express from 'express';
import usuarios from './usuarios';

const routes = express.Router();

routes.use('/usuarios', usuarios);

export default routes;
