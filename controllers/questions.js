const Question = require('../models/question');
const mongoose = require('mongoose');

exports.getQuestions = (req, res, next) => {
    Question
        .find()
        .then(questions => {
            res.status(200).json(questions);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
}

exports.getQuestion = (req, res, next) => {
    const id = req.params.questionId;
    Question
        .findById(id)
        .then(question => {
            res.status(200).json(question);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
}

exports.addQuestion = (req, res, next) => {
    const newQuestion = new Question ({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        question: req.body.question,
        answer: req.body.answer,
        addedBy: req.body.addedBy
    });
    newQuestion.save().then(result => {
        res.status(200).json(result);
    }).catch(err => console.log(err));
}

// exports.deleteQuestion = (req, res, next) => {

// }

// exports.editQuestion = (req, res, next) => {

// }
