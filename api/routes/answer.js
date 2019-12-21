const express = require('express');

const router = express.Router();

const answerController = require('../controllers/answer');

router.get('/', answerController.getAnswers);

router.post('/send', answerController.sendAnswer);

module.exports = router;