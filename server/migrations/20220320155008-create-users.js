'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: "workouts", key: "user_id" },
      },
      name: {
        type: Sequelize.STRING, allowNull: false, unique: true,
        validate: {
          len: [3, 20],
          notNull: { msg: "You need to provide name!" }
        }
      },
      age: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
          min: 10,
          max: 100,
          notNull: { msg: "You need to provide age!" }
        }
      },
      height: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
          min: 130,
          max: 250,
          notNull: { msg: "You need to provide height!" }
        }
      },
      weight: {
        type: Sequelize.INTEGER, allowNull: false,
        validate: {
          min: 40,
          max: 100,
          notNull: { msg: "You need to provide weight!" }
        }
      },

    }),
    {
      timestamps: false,
      freezeTableName: true,
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};
