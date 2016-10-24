var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongoose db is open!');
});

var authorSchema = mongoose.Schema({
    username: String,
    karma: Number,
    numSubmissions: Number,
});

var Author = mongoose.model('Author', authorSchema);

module.exports = Author;