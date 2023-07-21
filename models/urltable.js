var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
  shortUrl: String,
  longUrl: String
});

module.exports = mongoose.model('UrlTable', urlSchema);