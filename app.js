const express = require('express');
const cors = require('cors');
const appRouter = require('./routes');
const { resolve } = require('path');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*', Credential: true }));

app.use(appRouter);

module.exports = app;
