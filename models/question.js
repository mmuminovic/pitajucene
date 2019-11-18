const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    questionTitle: String,
    questionContent: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: false
    },
    tags: [String],
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer',
        required: false
    }],
    onRemaining: Boolean,
    accepted: Boolean,
    public: Boolean,
    alreadyExists: Boolean
})

module.exports = mongoose.model('Question', QuestionSchema);