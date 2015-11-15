var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

var apiRouter = require('./router/apirouter.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, "../build")));

app.listen(port);
