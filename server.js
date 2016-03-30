var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');
var morgan = require('morgan');
var ejs = require('ejs');

var config = require('./config/config');
var port = process.env.PORT || 8080;

var api = require('./routes/api');

mongoose.connect(config.database);

app.set('secret', config.secret);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api', api.apiRouter);

app.listen(port);
console.log('Server is running on http://localhost:' + port);