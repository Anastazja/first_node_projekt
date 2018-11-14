const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./lib/db/database');

app.use(bodyParser.json());

db.connect();

const usersRouter = require('./src/route/userRoute');
const petRouter = require('./src/route/petRoute');

db.connectionTest();
console.log('registering routes');

app.use('/user', usersRouter);

app.use('/pet', petRouter);

module.exports = app;