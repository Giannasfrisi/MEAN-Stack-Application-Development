const express = require('express');
const router = express.Router();

// Route using GET that returns a fixed string
router.get('/fixed-string', (req, res) => {
  res.render('index', { string: 'Hey now' });
});

// Route using POST that returns a string and its length
router.post('/string-length', (req, res) => {
  const { body } = req;
  const responseString = body.string || '';
  res.render('index', { string: responseString, length: responseString.length });
});

// Route using GET that reads a named value from the URL
router.get('/names/:name', (req, res) => {
  const { name } = req.params;
  res.render('index', { name });
});

module.exports = router;
