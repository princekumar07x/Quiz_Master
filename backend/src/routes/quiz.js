const express = require('express');
const router = express.Router();
const { getCategories, getQuestions, validateAnswer } = require('../controllers/quizController');

router.get('/categories', getCategories);
router.get('/questions', getQuestions);
router.post('/validate', validateAnswer);

module.exports = router;
