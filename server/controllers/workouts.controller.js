const models = require('../models');
const Workout = models.workouts;

exports.getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.findAll({
            raw:true,
            include: [{
                model: models.workout_volume,
                as: "workout_volume"
            }]
        })
        return res.status(200).send(workouts)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getWorkout = async (req, res) => {
    try {
        const Workout = await Workout.findByPk(req.params.id)
        res.status(200).send(Workout)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.createWorkout = async (req, res) => {
    try {
        await Workout.create(req.body)
        return res.status(201).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateWorkout = async (req, res) => {
    try {
        const Workout = await Workout.findByPk(req.params.id)
        await Workout.update(req.body)
        return res.status(200).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteWorkout = async (req, res) => {
    const { id } = req.params
    try {
      await Workout.destroy({ where: { id: id } })
        return res.status(200).send(`Workout with id ${id} was deleted!`)
    } catch (error) {
        res.status(500).send(error)
    }
}