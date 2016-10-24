var Author = require('../db/authorModel.js');
var Story = require('../db/storyModel.js');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose db AUTHORS is open!');
});





// write fetchAuthor method to get 1 author from DB






//-----------------------------------------------
//---------GET AUTHORS FROM DATABASE-------------
//-----------------------------------------------

// fetchAuthors retrieves all authors from the authors table (NOT THE API).

var fetchAuthors = function(callback) {
  Author.find({}, function(err, authors) {
    callback(authors);
  })
};

//-----------------------------------------------
//---------INSERT AUTHOR IN DATABASE-------------
//-----------------------------------------------

// insertAuthor inserts a single author into the DB.

exports.insertAuthor = function(req, res) {
  Author.create(req.body, function(err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.send(data);
    }
  })
};

//-----------------------------------------------
//-------UPDATE ALL AUTHORS IN DATABASE----------
//-----------------------------------------------


exports.updateAuthors = function(req, res) {

  // You give me a userId, and I'll give you all that user's data from HN API

  getSingleAuthorFromAPI = function(userId, callback) {
    var authorUrl = 'https://hacker-news.firebaseio.com/v0/user/' + userId + '.json';

    request.get(authorUrl, function(err, response, body) {
      if (err) {
        console.error(err);
      } else {
        var authorInfo = JSON.parse(body);
        console.log('user info: ', authorInfo);

        callback(authorInfo);
      }
    })
  };


  var saveCurrentAuthorsData = function(callback) {
    // get stories from database
    Story.find({}, function(err, stories) {
      // for each author in stories table
      for (var i = 0; i < stories.length; i++) {
        // get author's full details from HN API
        getSingleAuthorFromAPI(stories[i].author, function(authorData) {
          // run callback on authorData object
          callback(authorData);
        })
      }
    })
    res.sendStatus(200);
  };


  saveCurrentAuthorsData(function(authorData) {
    var filtered = {};
    filtered.author = authorData.by;
    filtered.title = authorData.karma;
    filtered.submittedCount = authorData.submitted.length;
    Author.create(filtered, function(err, data) {
      console.log('filtered author document being saved to Author Table: ', data);
    })
  });

};

