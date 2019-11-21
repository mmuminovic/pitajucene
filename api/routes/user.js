const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');
const isAdmin = require('../middlewares/isAdmin');
const isAuth = require('../middlewares/isAuth');

router.get('/messages/', isAuth, userController.getMessages);
router.get('/messages/:messageId', isAuth, userController.getMessage);
router.post('/messages/send', isAuth, userController.sendMessage);


module.exports = router;