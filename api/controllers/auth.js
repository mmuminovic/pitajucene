const User = require('../models/user');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                const error = new Error('A user with this email could not be found.');
                error.statusCode = 401;
                throw error;
            }
            loadeedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            
        })
}