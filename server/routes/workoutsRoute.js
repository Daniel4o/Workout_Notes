const express = require('express');
const Workouts = require('../controllers/workouts.controller');
const router = express.Router();

router.get('/', Workouts.getWorkouts);
router.get('/:id', Workouts.getWorkout);
router.post('/', Workouts.createWorkout);
router.patch('/:id', Workouts.updateWorkout);
router.delete('/:id', Workouts.deleteWorkout);

module.exports = router