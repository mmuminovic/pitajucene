const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: false
    },
    question: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    },
    tags: [String],
    answers: [{
        answer: {
            type: String
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    takenBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    modifiedDate: Date,
    onRemaining: Boolean,
    accepted: Boolean,
    public: Boolean
})

module.exports = mongoose.model('Question', QuestionSchema);