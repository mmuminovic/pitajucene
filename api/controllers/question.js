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

exports.sendQuestion = (req, res, next) => {
    const newQuestion = new Question({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        question: req.body.question,
        tags: req.body.tags,
        onRemaining: true,
        accepted: false,
        public: false
    });
    newQuestion.save()
        .then(result => {
            res.status(201).json(result);
        })
        .catch(err => console.log(err));
}

exports.deleteQuestion = (req, res, next) => {
    const questionId = req.params.questionId;
    Question.deleteOne({ _id: questionId })
        .then(result => {
            res.status(200).json({
                message: `Question has deleted successfully!`
            })
        })
        .catch(err => {
            res.status(500).json({ error: err });
        })
}

exports.editQuestion = (req, res, next) => {
    const questionId = req.params.questionId;
    let updateOps = {};
    const data = req.body;
    for (let ops in data) {
        updateOps[ops] = data[ops];
    }

    Question.updateOne({ _id: questionId }, { $set: updateOps })
        .then(result => {
            res.status(200).json({
                message: `Recipe updated.`
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        })
}


