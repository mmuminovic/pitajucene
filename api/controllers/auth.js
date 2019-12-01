const User = require('../models/user');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            loadedUser = user;
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: loadedUser.email,
                        userId: loadedUser._id.toString()
                    }, process.env.JWT_KEY, { expiresIn: '1h' }
                    );
                    console.log(loadedUser);
                    res.cookie('access_token', token, {
                        httpOnly: true
                    });
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token,
                        isAuth: true,
                        isAdmin: loadedUser.admin,
                        isModerator: loadedUser.moderator
                    });
                }
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.signup = (req, res, next) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     const error = new Error('Validation failed.');
    //     error.statusCode = 422;
    //     error.data = errors.array();
    //     throw error;
    // }
    const email = req.body.email;
    const fullName = req.body.fullName;
    const password = req.body.password;
    const dateOfBirth = req.body.dateOfBirth;
    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            const user = new User({
                _id: mongoose.Types.ObjectId(),
                email: email,
                password: hashedPw,
                fullName: fullName,
                dateOfBirth: dateOfBirth,
                admin: false,
                moderator: false
            });
            return user.save();
        })
        .then(result => {
            res.status(201).json({ message: 'User created!', userId: result._id });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};