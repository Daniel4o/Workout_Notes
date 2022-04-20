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
            as: "workout_volume"
        })
        Workout.belongsTo(models.users, {
            foreignKey: "user_id",
            targetKey: "id",
            as: "userWorkouts"
        })
    }

    Workout.sync()
    return Workout
}
module.exports = workout