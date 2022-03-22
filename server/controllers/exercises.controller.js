const models = require('../models');
const Exercise = models.exercises;

exports.getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.findAll({ paranoid: false })
        return res.status(200).send(exercises)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByPk(req.params.id)
        res.status(200).send(exercise)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.createExercise = async (req, res) => {
    try {
        await Exercise.create(req.body)
        return res.status(201).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByPk(req.params.id)
        await exercise.update(req.body)
        return res.status(200).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteExercise = async (req, res) => {
    const { id } = req.params
    try {
      await  Exercise.destroy({ where: { id: id } })
        return res.status(200).send(`Exercise with id ${id} was deleted!`)
    } catch (error) {
        res.status(500).send(error)
    }
}