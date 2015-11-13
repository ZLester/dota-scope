var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var apiRouter = require('./router/apirouter.js');
var port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, "../build")));
console.log('Dota Scope Listening on port ' + port);

app.listen(port);