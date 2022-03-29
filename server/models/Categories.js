const category = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        'categories', {
        category_name: {
            type: DataTypes.STRING(), allowNull: false, unique: true,
            validate: {
                len: [3, 20],
                notNull: { msg: "You need to provide category name!" }
            }
        },
    },
        {
            timestamps: true,
            freezeTableName: true,
            deletedAt: 'deletedAt',
            paranoid: true,
        },
    )

    Category.associate = models => {
        Category.belongsTo(models.exercises, {
            foreignKey: "id",
            targetKey: "category_id",
            as: "categoryExercises"
        })
    }
    
    Category.sync()
    return Category
}
module.exports = category


