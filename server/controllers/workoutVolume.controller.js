const models = require('../models');
const Workout_Volume = models.workout_volume;

exports.getAllWorkouts_Volume = async (req, res) => {
    try {
        const workout_volume = await Workout_Volume.findAll()
        return res.status(200).send(workout_volume)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getWorkout_Volume = async (req, res) => {
    try {
        const workout_volume = await Workout_Volume.findByPk(req.params.id)
        res.status(200).send(workout_volume)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.createWorkout_Volume = async (req, res) => {
    try {
        const exerciseExists = await Workout_Volume.findAll({
            where: {
                exercise_id: req.body.exercise_id,
                workout_id: req.body.workout_id
            },
            attributes: ["exercise_id", "workout_id"]
        })
        if (exerciseExists.length !== 0) {
            return res.status(500).send("Exercise already done for this workout!")
        }
        await Workout_Volume.create(req.body)
        return res.status(201).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateWorkout_volume = async (req, res) => {
    try {
        const workout_volume = await Workout_Volume.findByPk(req.params.id)
        console.log(req.body)
        const exerciseExists = await Workout_Volume.findAll({
            where: {
                exercise_id: req.body.exercise_id,
                workout_id: req.body.workout_id
            },
            attributes: ["exercise_id", "workout_id"]
        })
        if (exerciseExists.length !== 0) {
            return res.status(500).send("Exercise already done for this workout!")
        }
        await workout_volume.update(req.body)
        return res.status(200).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}
