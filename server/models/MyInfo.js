const myInfo = (sequelize, DataTypes) => {
    const MyInfo = sequelize.define(
        'my_info', {
        name: {
            type: DataTypes.STRING(), allowNull: false,
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

    MyInfo.sync()
    return MyInfo
}

module.exports = myInfo


