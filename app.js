const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mognoose = require('mongoose');
const cors = require('cors');

const questionRoutes = require('./routes/questions');

const MONGODB_URI = `mongodb://127.0.0.1:27017/pitajucene`;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(questionRoutes);

mognoose
    .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(8080)
    })
    .catch(err => {
        console.log(err);
    });

