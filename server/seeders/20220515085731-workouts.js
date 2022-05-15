'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('workouts', [{
      id: '1',
      user_id: '1',
      date: '2022-05-10'
    }, {
      id: '2',
      user_id: '1',
      date: '2022-05-12'
    }, {
      id: '3',
      user_id: '2',
      date: '2022-05-01'
    }, {
      id: '4',
      user_id: '2',
      date: '2022-05-02'
    }, {
      id: '5',
      user_id: '3',
      date: '2022-05-05'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workouts', null, {});

  }
};
