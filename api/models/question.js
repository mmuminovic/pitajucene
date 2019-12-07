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
    answers: [{
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }],
    takenBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        autopopulate: true
    },
    onRemaining: Boolean,
    accepted: Boolean,
    taken: Boolean,
    public: Boolean
});

QuestionSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Question', QuestionSchema);