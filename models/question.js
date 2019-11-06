const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    question: String,
    answer: String,
    addedBy: String
})

module.exports = mongoose.model('Question', QuestionSchema);