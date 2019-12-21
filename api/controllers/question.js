const Question = require('../models/question');
const mongoose = require('mongoose');

exports.getQuestions = (req, res, next) => {
    Question
        .find()
        .populate({ path: 'answers' })
        .then(questions => {
            res.status(200).json(questions);
        })
        .catch(err => {
            res.status(500).json({ error: err.message });
        })
}

exports.getUsersQuestions = (req, res, next) => {
    const userId = req.body.userId;
    Question
        .find({ takenBy: userId })
        .populate({
            path: 'answers',
            populate: {
                path: 'user',
                model: 'User'
            },
            options: {
                autopopulate: false
            }
        })
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
        .exec()
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
        onRemaining: true,
        accepted: false,
        public: false,
        modifiedDate: Date.now()
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
    const data = req.body;
    let updateData = {
        ...data
    };
    const answer = req.body.answers;
    delete updateData.answers;
    console.log(updateData);
    Question.findOneAndUpdate(
        { _id: questionId },
        { $set: updateData, $push: { answers: answer }},
        { new: true }
        
    )
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    })
}


