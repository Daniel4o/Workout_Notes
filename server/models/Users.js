const users = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        'users', {
        name: {
            type: DataTypes.STRING(), allowNull: false, unique: true,
            validate: {
                len: [3, 20],
                notNull: { msg: "You need to provide name!" }
            }
        },
        age: {
            type: DataTypes.INTEGER(), allowNull: false,
            validate: {
                min: 10,
                max: 100,
                notNull: { msg: "You need to provide age!" }
            }
        },
        height: {
            type: DataTypes.INTEGER(), allowNull: false,
            validate: {
                min: 130,
                max: 250,
                notNull: { msg: "You need to provide height!" }
            }
        },
        weight: {
            type: DataTypes.INTEGER(), allowNull: false,
            validate: {
                min: 40,
                max: 200,
                notNull: { msg: "You need to provide weight!" }
            }
        }
    },
        {
            timestamps: false,
            freezeTableName: true,
        })

        Users.associate = models => {
            Users.hasMany(models.workouts, {
                targetKey: "user_id",
                as: "workouts"
            })
        }
    Users.sync()
    return Users
}

module.exports = users


