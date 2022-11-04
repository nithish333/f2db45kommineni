var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/oreo', function(req, res, next) {
  res.render('oreo', { title: 'Search Results Oreo' });
});

module.exports = router;
