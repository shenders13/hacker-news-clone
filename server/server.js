var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var db = require('../db/mongooseConnection.js');
var storyHelpers = require('./storyHelpers.js');
var authorHelpers = require('./authorHelpers.js');
var updateStoriesAndAuthors = require('./updateData.js');
updateStoriesAndAuthors();

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json())

app.get('/stories', storyHelpers.fetchStories);
app.get('/authors', authorHelpers.fetchAuthors);
app.post('/story', storyHelpers.insertStory);
app.get('/update-stories', storyHelpers.updateStories);
app.get('/update-authors', authorHelpers.updateAuthors);


app.listen(process.env.PORT || 3000, function () {
  console.log('process.env.PORT: ', process.env.PORT);
});

