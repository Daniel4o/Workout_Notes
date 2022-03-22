const workout = (sequelize, DataTypes) => {
    const Workout = sequelize.define(
        'workouts', {
        exercise_one: {
            type: DataTypes.INTEGER(), allowNull: false,
            references: { model: "exercises", key: "id" },
            validate: {
                notNull: { msg: "You need to provide exercise_id !" }
            }
        },
        exercise_two: {
            type: DataTypes.INTEGER(), allowNull: true,
            references: { model: "exercises", key: "id" },
        },
        exercise_three: {
            type: DataTypes.INTEGER(), allowNull: true,
            references: { model: "exercises", key: "id" },
        },
        exercise_four: {
            type: DataTypes.INTEGER(), allowNull: true,
            references: { model: "exercises", key: "id" },
        },
        exercise_five: {
            type: DataTypes.INTEGER(), allowNull: true,
            references: { model: "exercises", key: "id" },
        },
        exercise_six: {
            type: DataTypes.INTEGER(), allowNull: true,
            references: { model: "exercises", key: "id" },
        },
        exercise_seven: {
            type: DataTypes.INTEGER(), allowNull: true,
            references: { model: "exercises", key: "id" },
        },
        exercise_eight: {
            type: DataTypes.INTEGER(), allowNull: true,
            references: { model: "exercises", key: "id" },
        },
        date: {
            type: DataTypes.DATEONLY, allowNull: false,
            validate: {
                notNull: { msg: "You need to provide date !" }
            }
        }
    },
        {
            timestamps: false,
            freezeTableName: true,
      
        })
        Workout.associate = models => {
            Workout.belongsToMany(models.exercises, {
                foreignKey: "exercise_one",
                through: 'exerciseOne',
                targetKey: "id"
            })
            Workout.belongsToMany(models.exercises, {
                foreignKey: "exercise_two",
                through: 'exercisTwo',
                targetKey: "id"
            })
            Workout.belongsToMany(models.exercises, {
                foreignKey: "exercise_three",
                through: 'exerciseThree',
                targetKey: "id"
            })
            Workout.belongsToMany(models.exercises, {
                foreignKey: "exercise_four",
                through: 'exerciseFour',
                targetKey: "id"
            })
            Workout.belongsToMany(models.exercises, {
                foreignKey: "exercise_five",
                through: 'exerciseFive',
                targetKey: "id"
            })
            Workout.belongsToMany(models.exercises, {
                foreignKey: "exercise_six",
                through: 'exerciseSix',
                targetKey: "id"
            })
            Workout.belongsToMany(models.exercises, {
                foreignKey: "exercise_seven",
                through: 'exerciseSeven',
                targetKey: "id"
            })
            Workout.belongsToMany(models.exercises, {
                foreignKey: "exercise_eight",
                through: 'exerciseEight',
                targetKey: "id"
            })
            Workout.belongsTo(models.workout_volume, {
                foreignKey:"id",
                targetKey: "workout_id",
                through: "workout_volume"
            })
        }

    Workout.sync()
    return Workout
}
module.exports = workout