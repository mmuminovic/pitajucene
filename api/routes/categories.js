const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categories');

router.get('/', categoryController.getCategories);
router.get('/:categoryId', categoryController.getCategory);
router.post('/add-category', categoryController.addCategory);
router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;