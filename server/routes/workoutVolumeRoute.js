const express = require('express');
const workoutVolume = require('../controllers/workoutVolume.controller');
const router = express.Router();

router.get('/', workoutVolume.getAllWorkoutsVolume);
router.get('/:id', workoutVolume.getWorkoutVolumeById);
router.post('/', workoutVolume.createWorkoutVolume);
router.patch('/:id', workoutVolume.updateWorkoutVolume);

module.exports = router