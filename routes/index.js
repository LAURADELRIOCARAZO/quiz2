var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/question', quizCOntroller.question);
router.get('/check', quizCOntroller.check);

module.exports = router;
