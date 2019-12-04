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
    messages: [
        {
            message: {
                type: Schema.Types.ObjectId,
                ref: 'Message',
                default: null
            }
        }
    ],
    favouriteQuestions: [{
        question: {
            type: Schema.Types.ObjectId,
            ref: 'Question',
            default: null
        }
    }],
    admin: Boolean,
    moderator: Boolean,
});


// UserSchema.methods.newMessage = () => {

// }

module.exports = mongoose.model('User', UserSchema);