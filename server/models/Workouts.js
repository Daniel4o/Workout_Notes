const workout = (sequelize, DataTypes) => {
    const Workout = sequelize.define(
        'workouts', {
            user_id: {
                type: DataTypes.INTEGER, allowNull: false,
                references: { model: "my_info", key: "id" },
                validate: {
                    notNull: { msg: "You need to provide user_id !" }
                }
            },
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
        Workout.belongsTo(models.workout_volume, {
            foreignKey: "id",
            targetKey: "workout_id",
            as: "workoutVolume"
        })
        Workout.belongsTo(models.workout_volume, {
            foreignKey: "user_id",
            targetKey: "id",
            as: "userWorkouts"
        })
    }
    Workout.sync()
    return Workout
}
module.exports = workout