const express = require('express');
const router = express.Router();
const validURL = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const URL = require('../models/url');

router.post('/shorten',async(req, res) => {
	const { longURL} = req.body;
	const baseUrl = config.get('baseURL')

	//checking base url
	if(!validURL.isUri(baseUrl)) {
		return res.status(401).json('invalid base url');
	}
	//create code
	const urlcode = shortid.generate();


	if(validURL.isUri(longURL)) {
		try{
			let url = await URL.findOne({ longURL});
			if(url) {
				res.json(url);
			} else {
				const shortUrl = baseUrl + '/' + urlcode;

				url = new URL({
					longURL,
					shortURL,
					urlcode,
					date: new Date()
				});

				await url.save();
				res.json(url);
				}

		} catch ( err) {
			console.error(err);
			res.status(500).json('Server error');
		}
	} else {
		res.status(401).json('Invalid input url');
	}

});
module.exports = router;