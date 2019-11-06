const express = require('express');

const router = express.Router();

const questionController = require('../controllers/questions');

router.get('/', questionController.getQuestions);

router.get('/get-question/:userId', questionController.getQuestion);

router.post('/add-question');

router.delete('/delete-question/:questionId');

router.patch('/edit-question');

module.exports = router;

