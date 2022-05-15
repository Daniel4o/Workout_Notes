'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: '1',
      name: 'Daniel',
      age: '23',
      height: '188',
      weight: '77'
    }, {
      id: '2',
      name: 'Peter',
      age: '25',
      height: '182',
      weight: '82'
    }, {
      id: '3',
      name: 'George',
      age: '27',
      height: '180',
      weight: '88'
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
