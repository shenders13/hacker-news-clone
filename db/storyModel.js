var mongoose = require('mongoose');

var storySchema = mongoose.Schema({
    title: String,
    author: String,
    score: Number,
    url: String
});

var Story = mongoose.model('Story', storySchema);

module.exports = Story;
