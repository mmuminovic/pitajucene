const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    fullName: {
        type: String,
        required: true
    },
    dateOfBirth: Date,
    city: String,
    country: String,
    email: {
        type: String,
        required: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    messages: [{
        message: {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        },
    }],
    favouriteQuestions: [{
        question: {
            type: Schema.Types.ObjectId,
            ref: 'Question'
        }
    }],
    admin: Boolean,
    moderator: Boolean,
    daija: Boolean
})

module.exports = mongoose.model('User', UserSchema);