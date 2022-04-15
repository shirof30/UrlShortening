/*const express = require('express');
const router = express.Router();

const Url = require('../models/url');

// Retain GET request 
router.get('/:code',async (req, res) => {

	try{
		const url = await Url.findOne({urlCode: req.params.code});

		if(url) {
			return res.redirect(url.longURL);

		} else { 
			return res.status(404).json('no url linked to this code');


		} 
	}catch (err) {
			console.error(err);
			res.status(500).json('Server error');

		}


});


module.exports = router; */

const express = require('express');
const router = express.Router();

const Url = require('../models/url');

// @route     GET /:code
// @desc      Redirect to long/original URL
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlcode: req.params.code });

    if (url) {
      return res.redirect(url.longURL);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;