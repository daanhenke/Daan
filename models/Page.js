var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Page', new Schema({
    title: String,
    Content: String,
    ContentType: String
}));