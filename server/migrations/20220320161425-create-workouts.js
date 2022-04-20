'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workouts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: "users", key: "id" },
        validate: {
            notNull: { msg: "You need to provide user_id !" }
        }
    },
      date: {
        type: Sequelize.DATEONLY, allowNull: false,
        validate: {
          notNull: { msg: "You need to provide date !" }
        }
      }
    }),
    {
      timestamps: false,
      freezeTableName: true,
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('workouts')
  }
};
