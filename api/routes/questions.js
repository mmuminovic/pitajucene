const express = require('express');

const router = express.Router();

const questionController = require('../controllers/question');
const answerController = require('../controllers/answer');
const isAdmin = require('../middlewares/isAdmin');
const isAuth = require('../middlewares/isAuth');


router.get('/', questionController.getQuestions);

router.post('/user-questions/', questionController.getUsersQuestions);

router.get('/get-question/:questionId', questionController.getQuestion);

router.post('/send-question', questionController.sendQuestion);

router.delete('/get-question/:questionId', questionController.deleteQuestion);

router.patch('/edit-question/:questionId', questionController.editQuestion);

router.post('/get-question/:questionId', answerController.sendAnswer);


module.exports = router;

