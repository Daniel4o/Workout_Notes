const exercise = (sequelize, DataTypes) => {
    const Exercise = sequelize.define(
        'exercises', {
        exercise_name: {
            type: DataTypes.STRING(), allowNull: false, unique: true,
            validate: {
                len: [3, 30],
                notNull: { msg: "You need to provide exercise name!" }
            }
        },
        category_id: {
            type: DataTypes.INTEGER, allowNull: false,
            references: { model: "categories", key: "id" },
            validate: {
                notNull: { msg: "You need to provide category_id !" }
            },
        },
    },
        {
            timestamps: true,
            freezeTableName: true,
            deletedAt: 'deletedAt',
            paranoid: true,
        },
    )
   
    Exercise.sync()
    return Exercise
}
module.exports = exercise
