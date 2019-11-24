const User = require('../models/user');
const Message = require('../models/message');
const mongoose = require('mongoose');

exports.createUser = (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin,
        moderator: req.body.moderator,
        daija: req.body.daija
    });
    user.save()
        .then(result => {
            res.status(201).json({
                message: "Uspešno ste se registrovali."
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

exports.getUsers = (req, res, next) => {
    User.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

exports.getMessages = (req, res, next) => {
    const user = req.user;
    Message.find({ to: user._id })
        // .sort({ messages.date: 'asc', test: -1 });
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

exports.getMessage = (req, res, next) => {
    const id = req.params.messageId;
    Message.findById(id)
        .then(message => {
            res.status(200).json(message);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}
exports.deleteMessage = (req, res, next) => {
    const id = req.params.messageId;
    Message.deleteOne({ _id: id })
        .then(message => {
            res.status(200).json({ message: 'Poruka je uspešno izbrisana.' });
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

exports.sendMessage = (req, res, next) => {
    const message = {
        message: req.body.message,
        user: req.body.user
    };
    const sentMessage = new Message({
        _id: new mongoose.Types.ObjectId(),
        user: req.body.user,
        title: req.body.title,
        messages: message,
        dateModified: Date.now()
    });
    sentMessage.save()
        .then(result => {
            res.status(201).json({
                message: `Poruka je uspešno poslata.`
            })
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

exports.replyMessage = (req, res, next) => {
    const messageId = req.params.messageId;
    const userReply = req.body.user;
    const message = {
        message: req.body.message,
        user: req.body.user
    };

    Message.findById(messageId)
        .then(result => {
            const messages = result.messages;
            // const isReplied = result.lastReply === userReply;
            messages.push(message);
            Message
                .updateOne({ _id: messageId }, {
                    messages: messages,
                    dateModified: Date.now(),
                    lastReply: userReply
                })
                .then(result => {
                    res.status(200).json({ message: `Odgovor uspešno poslat.` });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

}

exports.adminMessages = (req, res, next) => {
    Message.find()
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}





