const Message = require('../models/message');
const mongoose = require('mongoose');

exports.getMessages = (req, res, next) => {
    Message.find()
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

exports.sendMessage = (req, res, next) => {
    const sentMessage = new Message({
        _id: mongoose.Types.ObjectId,
        messageTitle: req.body.messageTitle,
        messageContent: req.body.messageContent,
        to: req.body.to,
        from: req.body.from
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
