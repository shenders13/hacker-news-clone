var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hackernewsclone');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose STORIES db is open!');
});

exports.db = db;