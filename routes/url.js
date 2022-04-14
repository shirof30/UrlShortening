const express = require('express');
const router = express.Router();
const validURL = require('valid-url');
const shortid = require('shortid');
const config = require('config');

const URL = require('../models/url');

router.post('/shorten',async(req, res) => {
	const { longURL} = req.body;
	const baseURL = config.get('baseURL')

	//checking base url
	if(!validUrl.isUri(baseURL)) {
		return res.status(401).json('invalid base url');
	}
	//create code
	const urlcode = shortid.generate();
	if(validUrl.isUri(longURL)) {
		try{
			let checkurl = await Url.findOne({ longURL});
			if(checkurl) {
				res.json(checkurl);
			} else {
				const shortenurl = baseURL + '/' + urlcode;

				checkurl = new Url({
					longURL,
					shortURL,
					urlcode,
					date: new Date()
				});

				await checkurl.save();
				checkurl.json(url);
				}

		} catch ( err) {
			console.error(err);
			res.status(500).json('Server error');
		}
	}

});
module.exports = router;