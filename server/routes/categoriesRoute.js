const express = require('express');
const Categories = require('../controllers/categories.controller');
const router = express.Router();

router.get('/paranoid', Categories.getCategoriesParanoid)
router.get('/', Categories.getCategories);
router.get('/:id', Categories.getCategory);
router.post('/', Categories.createCategory);
router.patch('/:id', Categories.updateCategory);
router.delete('/:id', Categories.deleteCategory);

module.exports = router