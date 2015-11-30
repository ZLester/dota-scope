var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var populateDatabase = require('./utils/populateDatabase.js');
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/dotascope';

mongoose.connect(mongoUri);

var apiRouter = require('./router/apirouter.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, "../build")));

populateDatabase();
console.log('DotaScope Listening on port ' + port);
app.listen(port);
