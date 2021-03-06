var request = require('request');

var updateStories = function(callback) {
  request.get('https://hackernewswithmodernui.herokuapp.com/update-stories', function(err, response, body) {
    if (err) {
      console.log('update stories error: ', err);
    } else {
      callback();
    }
  });
};


var updateAuthors = function() {
  request.get('https://hackernewswithmodernui.herokuapp.com/update-authors', function(err, response, body) {
    if (err) {
      console.log('update Authors error: ', err);
    } else {
      console.log('update successful ')
    }
  });
};

var updateAll = function() {
  updateStories(updateAuthors);
};

module.exports = function() {
  setInterval(updateAll, 600000); //every 10 minutes
  console.log('update of stories and authors occured!');
};

