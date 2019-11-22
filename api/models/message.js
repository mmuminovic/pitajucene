const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    _id: Schema.Types.ObjectId,
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    },
    messages: [{
        title: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }],
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