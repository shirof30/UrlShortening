const express = require('express');
const router = express.Router();

const Url = require('../models/url');

// @route     GET /:code
// @desc      Redirect to long/original URL
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlcode: req.params.code });

    if (url) {
    	const nUrl = url.longURL;
      return   res.status(301).redirect(nUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

module.exports = router;