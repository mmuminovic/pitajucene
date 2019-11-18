const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    _id: Schema.Types.ObjectId,
    answerText: String,
    answerVideoLink: String,
    answerAudio: String,
    forQuestion: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    answeredBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Answer', AnswerSchema);