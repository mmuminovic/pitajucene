const User = require('../models/user');
const Question = require('../models/question');
const Answer = require('../models/answer');
const utf8 = require('utf8');
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

exports.getQuestions = (req, res, next) => {
    Question.findAll().then(question => {
        Answer.findAll().then(answer => {
            // res.json({q: question, a: answer})
            let niz = [];
            niz = answer.map(ans => {
                let ansId = ans.comment_post_ID;
                for (let q of question) {
                    if (ansId === q.ID) {
                        return {
                            naslov: utf8.decode(q.post_title),
                            pitanje: utf8.decode(q.post_content),
                            odgovor: utf8.decode(ans.comment_content),
                            odgovor_postavio: utf8.decode(ans.comment_author)
                        }
                    }
                }
            });
            return niz;
        })
            .then(niz => {
                res.status(200).json(niz);
            })
    }).catch(err => console.log(err));
}

exports.getQuestion = (req, res, next) => {
    const id = req.params.userId;
    Question.findByPk(id).then(question => {
        Answer.findOne({
            where: {
                comment_post_ID: id
            }
        }).then(answer => {
            const qa = {
                naslov: utf8.decode(question.post_title),
                pitanje: utf8.decode(question.post_content),
                odgovor: utf8.decode(answer.comment_content),
                odgovor_postavio: utf8.decode(answer.comment_author)
            };
            res.status(200).json(qa);
            const p = path.join(__dirname, 'data', 'db.json');
            fs.readFile(p, { flag: 'r+' }, (err, fileContent) => {
                let arr = [];
                if (!err) {
                    arr = JSON.parse(fileContent);
                    console.log(arr);
                }

                arr.push(qa);
                console.log(arr);
                fs.writeFile(p, JSON.stringify(arr), (err) => {
                    console.log(err);
                });
            })
        })
    }).catch(err => console.log(err));
}

exports.addQuestion = (req, res, next) => {
}

exports.deleteQuestion = (req, res, next) => {

}

exports.editQuestion = (req, res, next) => {

}
