const express = require('express');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '..', 'client', 'dist');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(DIST_DIR));

module.exports = app;
