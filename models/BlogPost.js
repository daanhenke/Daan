var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('BlogPost', new Schema({
    title: String,
    date: String,
    content: String,
    contentType: String,
    postId: Number
}));