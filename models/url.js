const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
	urlcode: String,
	longURL: String,
	shortUrl: String,
	date: {type:String,default:Date.now}

});

module.exports = mongoose.model('Url',urlSchema);