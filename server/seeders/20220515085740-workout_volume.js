'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('workout_volume', [{
      workout_id: '1',
      exercise_id: '1',
      sets: '4',
      reps: '12',
      weight: '80'
    }, {
      workout_id: '1',
      exercise_id: '3',
      sets: '4',
      reps: '8',
      weight: '65'
    }, {
      workout_id: '1',
      exercise_id: '5',
      sets: '5',
      reps: '12',
      weight: '55'
    }, {
      workout_id: '1',
      exercise_id: '2',
      sets: '3',
      reps: '15',
      weight: '120'
    }, {
      workout_id: '2',
      exercise_id: '3',
      sets: '3',
      reps: '10',
      weight: '60'
    }, {
      workout_id: '2',
      exercise_id: '5',
      sets: '3',
      reps: '15',
      weight: '50'
    }, {
      workout_id: '3',
      exercise_id: '4',
      sets: '5',
      reps: '12',
      weight: '80'
    }, {
      workout_id: '3',
      exercise_id: '2',
      sets: '5',
      reps: '20',
      weight: '100'
    }, {
      workout_id: '4',
      exercise_id: '5',
      sets: '4',
      reps: '11',
      weight: '70'
    }, {
      workout_id: '4',
      exercise_id: '7',
      sets: '4',
      reps: '12',
      weight: '60'
    }, {
      workout_id: '5',
      exercise_id: '1',
      sets: '3',
      reps: '15',
      weight: '120'
    }, {
      workout_id: '5',
      exercise_id: '3',
      sets: '3',
      reps: '6',
      weight: '90'
    }, {
      workout_id: '5',
      exercise_id: '5',
      sets: '3',
      reps: '15',
      weight: '70'
    }, {
      workout_id: '5',
      exercise_id: '8',
      sets: '5',
      reps: '20',
      weight: '10'
    },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workout_volume', null, {});
  }
};
