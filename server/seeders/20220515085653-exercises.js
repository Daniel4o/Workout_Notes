'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('exercises', [{
      id: '1',
      exercise_name: 'Squats',
      category_id: '1'
    }, {
      id: '2',
      exercise_name: 'Leg Press',
      category_id: '1'
    }, {
      id: '3',
      exercise_name: 'Bench Press',
      category_id: '2'

    }, {
      id: '4',
      exercise_name: 'Push Ups',
      category_id: '2'
    }, {
      id: '5',
      exercise_name: 'Pull Ups',
      category_id: '3'
    }, {
      id: '6',
      exercise_name: 'Barbell Rows',
      category_id: '3'
    }, {
      id: '7',
      exercise_name: 'Shoulder Press',
      category_id: '4'
    }, {
      id: '8',
      exercise_name: 'Lateral Raise',
      category_id: '4'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('exercises', null, {});
  }
};
