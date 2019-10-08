const User = require('../models/user');
const Question = require('../models/question');

exports.getQuestions = (req, res, next) => {
    Question
        .findAll()
        .then(questions => {
            res.status(200).json({
                pitanja: questions
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
}

exports.getQuestion = (req, res, next) => {

}

exports.addQuestion = (req, res, next) => {

}

exports.deleteQuestion = (req, res, next) => {

}

exports.editQuestion = (req, res, next) => {

}
