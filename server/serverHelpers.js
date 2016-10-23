var Story = require('../db/storyModel.js');
var bodyParser = require('body-parser');

exports.fetchStories = function(req,res) {
  Story.find({}, function(err, stories) {
    res.send(stories);
  })
};

exports.insertStory = function(req, res) {
  console.log('req of POST request: ', req.body);
  Story.create(req.body, function(err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.sendStatus(200);
    }
  })
};

