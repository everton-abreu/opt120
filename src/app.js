// src/app.js

const express = require('express');
const cors = require('cors');

const domains = require('./domains');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', domains);

module.exports = app;