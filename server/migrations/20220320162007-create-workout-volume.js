'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('workout_volume', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      workout_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: "workouts", key: "id" },
        validate: {
          notNull: { msg: "You need to provide workout_id !" }
        }
      },
      exercise_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: "exercises", key: "id" },
        validate: {
          notNull: { msg: "You need to provide exercise_id !" }
        },
      },
      sets: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
          min: 1,
          max: 100,
          notNull: { msg: "You need to provide sets!" }
        }
      },
      reps: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
          min: 1,
          max: 100,
          notNull: { msg: "You need to provide reps!" }
        }
      },
      weight: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
          min: 0,
          max: 1000,
          notNull: { msg: "You need to provide sets!" }
        }
      }
    }),
    {
      timestamps: false,
      freezeTableName: true,
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('workout_volume')
  }
}
