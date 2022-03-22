'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category_name: {
        type: Sequelize.STRING, allowNull: false, unique: true,
        validate: {
          len: [3, 20],
          notNull: { msg: "You need to provide category name!" }
        }
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
            fields: ['category_name']
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
    await queryInterface.dropTable('categories')
  }
};