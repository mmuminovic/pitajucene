const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    email: String,
    password: String,
    fullName: String,
    admin: Boolean,
    daija: Boolean
})

module.exports = mongoose.model('User', UserSchema);