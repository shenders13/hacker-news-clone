var Story = require('../db/storyModel.js');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var serverHelpers = require('./serverHelpers.js');

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json())

app.get('/stories', serverHelpers.fetchStories);
app.post('/story', serverHelpers.insertStory);
app.get('/update-stories', serverHelpers.updateStories);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});