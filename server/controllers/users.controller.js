const models = require('../models');
const Users = models.users;

exports.getUsers = async (req, res) => {
    try {
        const user = await Users.findAll()
        return res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}


exports.getUserById = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: { id: req.params.id },
            raw: true,
            include: [{
                model: models.workouts,
                as: "workouts",
            }]
        })
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.createUser = async (req, res) => {
    try {
        await Users.create(req.body)
        return res.status(201).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.id)
        await user.update(req.body)
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteUser = async (req, res) => {
    const { id } = req.params
    try {
     await Users.destroy({ where: { id: id } })
        return res.status(200).send(`User with id: ${id} has been deleted!`)
    } catch (error) {
        return res.status(500).send(error)
    }
}