var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/author', function(req, res, next) {
  res.render('author');
});



module.exports = router;
