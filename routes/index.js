var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET gallery page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery', { title: 'LisanaPhoto' });
});

/* GET family gallery page. */
router.get('/family', function(req, res, next) {
  res.render('family', { title: 'LisanaPhoto: Family' });
});

/* GET urban gallery page. */
router.get('/urban', function(req, res, next) {
  res.render('urban', { title: 'LisanaPhoto: Urban' });
});

/* GET travel page. */
router.get('/travel', function(req, res, next) {
  res.render('travel', { title: 'LisanaPhoto: Travel' });
});

/* GET about page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'About LisanaPhoto' });
});


module.exports = router;
