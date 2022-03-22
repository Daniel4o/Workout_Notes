const express = require('express');
const workout_volume = require('../controllers/workoutVolume.controller');
const router = express.Router();

router.get('/', workout_volume.getAllWorkouts_Volume);
router.get('/:id', workout_volume.getWorkout_Volume);
router.post('/', workout_volume.createWorkout_Volume);
router.patch('/:id', workout_volume.updateWorkout_volume);

module.exports = router