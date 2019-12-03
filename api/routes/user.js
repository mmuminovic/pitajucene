const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');
const isAdmin = require('../middlewares/isAdmin');
const isAuth = require('../middlewares/isAuth');

router.get('/users', userController.getUsers);
router.get('/users/:user', userController.getUser);
router.get('/messages/', userController.getMessages);
router.get('/messages/:messageId', userController.getMessage);
router.delete('/messages/:messageId', userController.deleteMessage);
router.post('/messages/send', userController.sendMessage);
router.get('/admin/messages', userController.adminMessages)
router.patch('/messages/:messageId', userController.replyMessage);


module.exports = router;