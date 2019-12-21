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
        unique: true
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
    admin: Boolean,
    moderator: Boolean,
},
    {
        timestamps: true
    }
);


// UserSchema.methods.newMessage = () => {

// }

module.exports = mongoose.model('User', UserSchema);