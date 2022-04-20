const models = require('../models');
const Workout_Volume = models.workout_volume;
const Workouts = models.workouts;

exports.getAllWorkoutsVolume = async (req, res) => {
    try {
        const workoutVolume = await Workout_Volume.findAll({ 
            raw: true,
            include: [{
                model: models.exercises,
                as: "exercises"  
            }]
        })
        return res.status(200).send(workoutVolume)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getWorkoutVolumeById = async (req, res) => {
    try {
        const workoutVolume = await Workout_Volume.findAll({
            where: { workout_id: req.params.id }
        })
        res.status(200).send(workoutVolume)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.createWorkoutVolume = async (req, res) => {
    try {
        await Workout_Volume.create(req.body)
        return res.status(201).send(req.body)
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
