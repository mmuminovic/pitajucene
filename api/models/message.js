const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    _id: Schema.Types.ObjectId,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    title: {
        type: String,
        required: true
    },
    messages: [{
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: false
        },
    }],
    dateModified: {
        type: Date,
        default: Date.now
    },
    replied: {
        type: Boolean,
        default: false
    },
    seen: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Message', MessageSchema);