const Message = require('../models/message');
const mongoose = require('mongoose');

exports.getMessages = (req, res, next) => {
    const user = req.user;
    Message.find({ to: user._id })
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
        from: req.user._id
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

exports.arrivedMessages = (req, res, next) => {
    Message.find({ to: null })
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}



