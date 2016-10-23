var express = require('express');
var path = require('path');
var app = express();
var serverHelpers = require('./serverHelpers.js');

app.use(express.static(path.join(__dirname, '../client')));

app.get('/stories', serverHelpers.fetchStories);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});