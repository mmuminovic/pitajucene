const express = require('express');

const router = express.Router();

const questionController = require('../controllers/questions');


router.get('/', questionController.getQuestions);

router.get('/get-question/:questionId', questionController.getQuestion);

router.post('/send-question', questionController.sendQuestion);

router.delete('/get-question/:questionId', questionController.deleteQuestion);

router.patch('/edit-question/:questionId', questionController.editQuestion);





module.exports = router;

