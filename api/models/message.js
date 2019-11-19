const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    _id: Schema.Types.ObjectId,
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    toAdmin: Boolean,
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    messageTitle: {
        type: String,
        required: true
    },
    messageContent: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Message', MessageSchema);