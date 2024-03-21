// src/app.ts

import express from 'express';
import cors from 'cors';

import domains from './domains';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', domains);

export default app;
