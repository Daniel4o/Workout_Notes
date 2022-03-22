const models = require('../models');
const Category = models.categories;

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll()
        return res.status(200).send(categories)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id)
        res.status(200).send(category)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.createCategory = async (req, res) => {
    try {
        await Category.create(req.body)
        return res.status(201).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByPk(req.params.id)
        await category.update(req.body)
        return res.status(200).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteCategory = async (req, res) => {
    const { id } = req.params
    try {
      await Category.destroy({ where: { id: id } })
        return res.status(200).send(`Category with id ${id} was deleted!`)
    } catch (error) {
        res.status(500).send(error)
    }
}