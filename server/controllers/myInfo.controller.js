const models = require('../models');
const MyInfo = models.my_info;

exports.getMyAllInfo = async (req, res) => {
    try {
        const me = await MyInfo.findAll()
        return res.status(200).send(me)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.getMyLatestInfo = async (req, res) => {
    try {
        const me = await MyInfo.findAll({
            order: [['date', 'DESC']],
            raw: true,
        })
        return res.status(200).send(me)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.getMyInfoById = async (req, res) => {
    try {
        const me = await MyInfo.findAll({
            where: { id: req.params.id },
            raw: true,
            include: [{
                model: models.workouts,
                as: "workouts",
            }]
        })
        return res.status(200).send(me)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.createMyInfo = async (req, res) => {
    try {
        await MyInfo.create(req.body)
        return res.status(201).send(req.body)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.updateMyInfo = async (req, res) => {
    try {
        const me = await MyInfo.findByPk(req.params.id)
        await me.update(req.body)
        return res.status(200).send(me)
    } catch (error) {
        return res.status(500).send(error)
    }
}

exports.deleteMyInfo = async (req, res) => {
    const { id } = req.params
    try {
     await MyInfo.destroy({ where: { id: id } })
        return res.status(200).send(`My Info with id: ${id} has been deleted!`)
    } catch (error) {
        return res.status(500).send(error)
    }
}