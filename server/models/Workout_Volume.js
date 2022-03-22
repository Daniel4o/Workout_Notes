const workoutVolume = (sequelize, DataTypes) => {
    const Workout_Volume = sequelize.define(
        'workout_volume', {
        workout_id: {
            type: DataTypes.INTEGER, allowNull: false,
            references: { model: "workouts", key: "id" },
            validate: {
                notNull: { msg: "You need to provide workout_id !" }
            }
        },
        exercise_id: {
            type: DataTypes.INTEGER, allowNull: false,
            references: { model: "exercises", key: "id" },
            validate: {
                notNull: { msg: "You need to provide exercise_id !" }
            },
        },
        sets: {
            type: DataTypes.INTEGER, allowNull: false,
            validate: {
                min: 1,
                max: 100,
                notNull: { msg: "You need to provide sets!" }
            }
        },
        reps: {
            type: DataTypes.INTEGER, allowNull: false,
            validate: {
                min: 1,
                max: 100,
                notNull: { msg: "You need to provide reps!" }
            }
        },
        weight: {
            type: DataTypes.INTEGER, allowNull: false,
            validate: {
                min: 0,
                max: 1000,
                notNull: { msg: "You need to provide sets!" }
            }
        }
    },
        {
            timestamps: false,
            freezeTableName: true,
        },
    )
    Workout_Volume.associate = models => {
        Workout_Volume.belongsTo(models.workouts,{
           foreignKey: "workout_Id",
           as: "workoutId",
           soruceKey: "id" 
        })
        Workout_Volume.belongsTo(models.workouts, {
            foreignKey: "exercise_id",
            as: 'exerciseOne',
            soruceKey: "exercise_one"
        })
        Workout_Volume.belongsTo(models.workouts, {
            foreignKey: "exercise_id",
            as: 'exerciseTwo',
            soruceKey: "exercise_two"
        })
        Workout_Volume.belongsTo(models.workouts, {
            foreignKey: "exercise_id",
            as: 'exerciseThree',
            soruceKey: "exercise_three"
        })
        Workout_Volume.belongsTo(models.workouts, {
            foreignKey: "exercise_id",
            as: 'exerciseFour',
            soruceKey: "exercise_four"
        })
        Workout_Volume.belongsTo(models.workouts, {
            foreignKey: "exercise_id",
            as: 'exerciseFive',
            soruceKey: "exercise_five"
        })
        Workout_Volume.belongsTo(models.workouts, {
            foreignKey: "exercise_id",
            as: 'exerciseSix',
            soruceKey: "exercise_six"
        })
        Workout_Volume.belongsTo(models.workouts, {
            foreignKey: "exercise_id",
            as: 'exerciseSeven',
            soruceKey: "exercise_seven"
        })
        Workout_Volume.belongsTo(models.workouts, {
            foreignKey: "exercise_id",
            as: 'exerciseEight',
            soruceKey: "exercise_eight"
        })
    }
    Workout_Volume.sync()
    return Workout_Volume
}

module.exports = workoutVolume