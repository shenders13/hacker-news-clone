var mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
    username: String,
    karma: Number,
    numSubmissions: Number,
});

var Author = mongoose.model('Author', authorSchema);


module.exports = Author;