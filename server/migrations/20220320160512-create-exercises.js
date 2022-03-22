'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      exercise_name: {
        type: Sequelize.STRING, allowNull: false, unique: true,
        validate: {
          len: [3, 30],
          notNull: { msg: "You need to provide exercise name!" }
        }
      },
      category_id: {
        type: Sequelize.INTEGER, allowNull: false,
        references: { model: "categories", key: "id" },
        validate: {
          notNull: { msg: "You need to provide category_id !" }
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: Sequelize.DATE
      },
    },
      {
        uniqueKeys: {
          Items_unique: {
            fields: ['exercise_name']
          }
        }
      }),
    {
      timestamps: true,
      freezeTableName: true,
      paranoid: true,
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('exercises')
  }
};
