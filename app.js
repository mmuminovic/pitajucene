const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const Question = require('./models/question');
const User = require('./models/user');

const questionRoutes = require('./routes/questions');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(questionRoutes);

// Question.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Question);

sequelize
    .sync()
    .then(result => {
        app.listen(8000)
    })
    .catch(err => {
        console.log(err);
    });

