'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [{
      id: '1',
      category_name: 'Legs'
    }, {
      id: '2',
      category_name: 'Chest'
    }, {
      id: '3',
      category_name: 'Back'
    }, {
      id: '4',
      category_name: 'Shoulders'
    }])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
