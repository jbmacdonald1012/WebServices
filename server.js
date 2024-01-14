const express = require('express');
const app = express();
const firstController = require('./controllers/lesson1');

app.get('/', firstController.homeRoute);
app.get('/kids', firstController.kidsRoute);

const port = 3000;

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || port));