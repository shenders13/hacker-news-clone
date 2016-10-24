var Story = require('../db/storyModel.js');
var bodyParser = require('body-parser');
var request = require('request');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stories');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose db is open!');
});

//-----------------------------------------------
//---------GET STORIES FROM DATABASE-------------
//-----------------------------------------------

// fetchStories retrieves all stories from the DB.

exports.fetchStories = function(req,res) {
  Story.find({}, function(err, stories) {
    res.send(stories);
  })
};

//-----------------------------------------------
//---------INSERT STORY IN DATABASE--------------
//-----------------------------------------------

// insertStory inserts a single story into the DB.

exports.insertStory = function(req, res) {
  Story.create(req.body, function(err, data) {
    if (err) {
      res.send(err);
    }
    else {
      res.send(data);
    }
  })
};

//-----------------------------------------------
//-GET STORIES FROM HN API & INSERT IN DATABASE--
//-----------------------------------------------

// This function is a bit of a mammoth. Think of it
// as having three main parts. 

// The first part defines the getJSONFromHackerNews
// function. This retrieves an array of id's corresponding
// to the first 500 stories on Hacker News.

// The second part defines the getStoriesData function 
// which retrieves the first 15 stories (story, author
// title) using the id's we got in the first part.

// The third part is the invocation of the getStoriesData
// function (from second part). getStoriesData takes a
// callback as a parameter which we use to handle each  
// story we get from Hacker News and store them into our
// database.

// After updateStories is run, the first 15 stories of
// Hacker News should be in our database!

exports.updateStories = function(req, res) {

  // PART 1 - RETRIVE ID'S OF FIRST 500 STORIES FROM HR

  var topStoriesURL = 'https://hacker-news.firebaseio.com/v0/topstories.json';
  
  
  var getJSONFromHackerNews = function (url, callback) {
    request.get(url, function(err, response, body) {
      var data = null;
      if (err) {
        callback(err, null);
      } else {
        data = JSON.parse(body);
        callback(null, data);
      }
    });
  };

  // PART 2 - DEFINE FUNCTION TO RETRIVE FIRST 15 STORY OBJECTS

  var getStoriesData = function(limit, callback) {
    // remove all previous stories
    Story.remove({}, function() {
      console.log('All story documents removed');
    })
    // get storyId's in an array
    getJSONFromHackerNews(topStoriesURL, function(err, data) {
      var storyIdArray = data;
      // loop through storyIdArray
      for (var i = 0; i < limit; i++) {
        var dataUrl = 'https://hacker-news.firebaseio.com/v0/item/' + storyIdArray[i] + '.json';
        // for each storyId, ping the API to get data on each story
        request.get(dataUrl, function(err, response, body) {
          if (err) {
            console.error(err);
          } else {
            // push each storyInfo object to storyDataArray
            var storyInfo = JSON.parse(body);
            console.log('title: ', storyInfo.title);
            callback(storyInfo);
          }
        })
      }
      res.sendStatus(200);
    });
  };

  // PART 3 - INVOKE FUNCTION. HANDLER INSERTS 20 STORY OBJECTS INTO DB.

  getStoriesData(10, function(storyInfo) {
    var filtered = {};
    filtered.author = storyInfo.by;
    filtered.title = storyInfo.title;
    filtered.score = Number(storyInfo.score);
    Story.create(filtered, function(err, data) {
    })
  });
};