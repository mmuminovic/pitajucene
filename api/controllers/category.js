const Category = require('../models/category');
const Question = require('../models/user');
const mongoose = require('mongoose');

exports.getCategories = (req, res, next) => {
    Category
        .find()
        .then(categories => {
            res.status(200).json(categories);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

exports.getCategory = (req, res, next) => {
    const id = req.params.categoryId;
    Question
        .find({ category: id })
        .then(questions => {
            res.status(200).json(questions);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

exports.addCategory = (req, res, next) => {
    const newCategory = new Category({
        _id: mongoose.Types.ObjectId,
        categoryName: req.body.categoryName
    });
    newCategory.save()
        .then(result => {
            res.status(201).json({
                message: `Kategorija uspešno dodata.`
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
}

exports.deleteCategory = (req, res, next) => {
    const id = req.params.categoryId;
    Category.deleteOne({ _id: id })
        .then(response => {
            res.status(200).json({
                message: `Kategorija uspešno izbrisana.`
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
}