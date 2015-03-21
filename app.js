var express = require('express');
var bodyParser = require('body-parser');
var gaiabot = require('./gaia-bot');
 
var app = express();
var port = process.env.PORT || 3000;
 
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/', function (req, res) { res.status(200).send('Praise Gaia!') });

app.post('/hello', gaiabot)

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('Praising Gaia and listening to her energy waves at ' + port);
});