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
      exercise_one: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: "exercises", key: "id" },
        validate: {
          notNull: { msg: "You need to provide exercise_id !" }
        }
      },
      exercise_two: {
        type: Sequelize.INTEGER, allowNull: true,
        references: { model: "exercises", key: "id" },
      },
      exercise_three: {
        type: Sequelize.INTEGER, allowNull: true,
        references: { model: "exercises", key: "id" },
      },
      exercise_four: {
        type: Sequelize.INTEGER, allowNull: true,
        references: { model: "exercises", key: "id" },
      },
      exercise_five: {
        type: Sequelize.INTEGER, allowNull: true,
        references: { model: "exercises", key: "id" },
      },
      exercise_six: {
        type: Sequelize.INTEGER, allowNull: true,
        references: { model: "exercises", key: "id" },
      },
      exercise_seven: {
        type: Sequelize.INTEGER, allowNull: true,
        references: { model: "exercises", key: "id" },
      },
      exercise_eight: {
        type: Sequelize.INTEGER, allowNull: true,
        references: { model: "exercises", key: "id" },
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
