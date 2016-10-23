var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stories');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose db is open!');
});


var storySchema = mongoose.Schema({
    title: String,
    author: String,
    score: String
});

var Story = mongoose.model('Story', storySchema);
