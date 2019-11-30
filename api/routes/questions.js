const express = require('express');

const router = express.Router();

const questionController = require('../controllers/question');
const isAdmin = require('../middlewares/isAdmin');
const isAuth = require('../middlewares/isAuth');


router.get('/', questionController.getQuestions);

router.get('/get-question/:questionId', questionController.getQuestion);

router.post('/send-question', isAuth, questionController.sendQuestion);

router.delete('/get-question/:questionId', isAuth, questionController.deleteQuestion);

router.patch('/edit-question/:questionId', questionController.editQuestion);





module.exports = router;

