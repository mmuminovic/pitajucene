const Answer = require('../models/answer');

const mongoose = require('mongoose');

exports.getAnswers = (req, res, next) => {
    Answer.find()
        .then(result => {
            res.status(200).json(result);
        })
}

exports.sendAnswer = (req, res, next) => {
    const newAnswer = new Answer({
        _id: new mongoose.Types.ObjectId(),
        text: req.body.text,
        forQuestion: req.body.forQuestion,
        answeredBy: req.body.answeredBy
    });
    newAnswer.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => console.log(err));
}