const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mognoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const questionRoutes = require('./api/routes/questions');
const errorController = require('./api/controllers/error');
const categoryRoutes = require('./api/routes/categories');
const userRoutes = require('./api/routes/user');
const authRoutes = require('./api/routes/auth');
const answerRoutes = require('./api/routes/answer');

const MONGODB_URI = `${process.env.MONGODB_URI}`;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE', 
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(questionRoutes);
app.use(authRoutes);
app.use('/category', categoryRoutes);
app.use('/answer', answerRoutes);
app.use(userRoutes);
app.use(errorController.get404);

mognoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(result => {
        app.listen(8000);
        console.log(`App is started and listening on port 8000`);
    })
    .catch(err => {
        console.log(err);
    });

