var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var populateDatabase = require('./utils/populateDatabase.js');

mongoose.connect('mongodb://test:test@ds057934.mongolab.com:57934/heroku_5kt62x61');

var apiRouter = require('./router/apirouter.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, "../build")));

populateDatabase();
console.log('DotaScope Listening on port ' + port);
app.listen(port);
