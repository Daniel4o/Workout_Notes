const models = require('../models');
const Category = models.categories;

exports.getCategoriesParanoid = async (req, res) => {
    try {
        const categories = await Category.findAll({ paranoid: false })
        return res.status(200).send(categories)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            raw: true,
            include: [{
                model: models.exercises,
                as: "categoryExercises",
                attributes: ["exercise_name", "id"]
            }]
        })
        
        var output = [];

        categories.forEach(function (item) {
            var existing = output.filter(function (v, i) {
                return v.category_name == item.category_name;
            });
            if (existing.length) {
                var existingIndex = output.indexOf(existing[0]);
                output[existingIndex]['categoryExercises.exercise_name'] = output[existingIndex]['categoryExercises.exercise_name'].concat(item['categoryExercises.exercise_name']);
                output[existingIndex]['categoryExercises.id'] = output[existingIndex]['categoryExercises.id'].concat(item['categoryExercises.id']);

            } else {
                if (typeof item['categoryExercises.exercise_name'] == 'string')
                    item['categoryExercises.exercise_name'] = [item['categoryExercises.exercise_name']];
                    item['categoryExercises.id'] = [item['categoryExercises.id']];
                    output.push(item);
            }
        });
        return res.status(200).send(output)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getCategory = async (req, res) => {
    try {
        const category = await Category.findAll({
            where: { id: req.params.id },
            raw: true,
            include: [{
                model: models.exercises,
                as: "categoryExercsies"
            }]
        })
        const output = category.reduce((accu, { id, ...rest }) => {
            if (!accu[id]) accu[id] = {};
            accu[id] = { id, ...accu[id], ...rest };
            return accu;
        }, {});
        console.log(output)
        res.status(200).send(output)
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