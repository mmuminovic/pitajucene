const Question = require('../models/question');

exports.getQuestions = (req, res, next) => {
    Question
        .find()
        .then(question => {
            res.status(200).json(question);
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
}

exports.deleteQuestion = (req, res, next) => {

}

exports.editQuestion = (req, res, next) => {

}
