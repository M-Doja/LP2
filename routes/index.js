var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET gallery page. */
router.get('/gallery', function(req, res, next) {
  res.render('gallery');
});

/* GET family gallery page. */
router.get('/family', function(req, res, next) {
  res.render('family');
});

/* GET urban gallery page. */
router.get('/urban', function(req, res, next) {
  res.render('urban');
});

/* GET travel page. */
router.get('/travel', function(req, res, next) {
  res.render('travel');
});

/* GET about page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});


module.exports = router;
