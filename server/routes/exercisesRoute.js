const express = require('express');
const Exercises = require('../controllers/exercises.controller');
const router = express.Router();

router.get('/', Exercises.getExercises);
router.get('/:id', Exercises.getExercise);
router.post('/', Exercises.createExercise);
router.patch('/:id', Exercises.updateExercise);
router.delete('/:id', Exercises.deleteExercise);

module.exports = router