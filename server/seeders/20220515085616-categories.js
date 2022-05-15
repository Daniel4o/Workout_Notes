'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [{
      id: '1',
      name: 'Legs'
    }, {
      id: '2',
      name: 'Chest'
    }, {
      id: '3',
      name: 'Back'
    }, {
      id: '4',
      name: 'Shoulders'
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
