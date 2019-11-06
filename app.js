const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mognoose = require('mongoose');
const Question = require('./models/question');
const User = require('./models/user');

const questionRoutes = require('./routes/questions');

const MONGODB_URI = `mongodb://127.0.0.1:27017/pitajucene`

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(questionRoutes);

// Question.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Question);

mognoose
    .connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        app.listen(8000)
    })
    .catch(err => {
        console.log(err);
    });

