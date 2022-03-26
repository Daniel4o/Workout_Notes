const models = require('../models');
const Workout_Volume = models.workout_volume;
const Workouts = models.workouts;

exports.getAllWorkoutsVolume = async (req, res) => {
    try {
        const workoutVolume = await Workout_Volume.findAll()
        return res.status(200).send(workoutVolume)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getWorkoutVolumeById = async (req, res) => {
    try {
        const workoutVolume = await Workout_Volume.findByPk(req.params.id)
        res.status(200).send(workoutVolume)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.createWorkoutVolume = async (req, res) => {
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
        const workout = await Workouts.findAll({
            raw: true,
            where: { id: req.body.workout_id },
        })
        const exercisesExistsInWorkout = workout.map(exercises => Object.values(exercises))
        if (exercisesExistsInWorkout[0].includes(parseInt(req.body.exercise_id))) {
            await Workout_Volume.create(req.body)
            return res.status(201).send(req.body)
        }
        else {
            res.status(500).send("This exercise has not been done in the workout!")
        }
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateWorkoutVolume = async (req, res) => {
    try {
        const workoutVolume = await Workout_Volume.findByPk(req.params.id)
        if (req.body.workout_id || req.body.exercise_id) {
            return res.status(500).send("Workout and exercise cannot be changed!")
        }
        await workoutVolume.update(req.body)
        return res.status(200).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}
