const ordenpCtrl = {}
const ordenpModel= require(`../models/ordenp.model`)

ordenpCtrl.listar = async (req, res) => {
    try {
        const ordenp = await ordenpModel.find()
        res.json({
            ok: true,
            ordenp,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

ordenpCtrl.add = async (req, res) => {
    try {
        const { estadocompra, fechacreacion, preciototal, } = req.body
        const newOrdenPedido = new ordenpModel({
            estadocompra, 
            fechacreacion,
            preciototal
            
        })
        await newOrdenPedido.save()
        res.json({
            ok: true,
            newOrdenPedido,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

ordenpCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const ordenp = await ordenpModel.findById({ _id: id })
        if (!ordenp) {
            return res.status(400).json({
                ok: false,
                message: "La orden de pedido no está registrada en la base de datos",
            })
        }

        const estadocompra = req.body.estadocompra || ordenp.estadocompra
        const fechacreacion = req.body.fechacreacion || ordenp.fechacreacion
        const preciototal = req.body.preciototal || ordenp.preciototal
        const ordenpUpdate = {
            estadocompra, 
            fechacreacion,
            preciototal
            
        }
        await ordenp.updateOne(ordenpUpdate)
        res.json({
            ok: true,
            message: 'La orden de pedido fue actualizada',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

ordenpCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params
        const ordenp = await ordenpModel.findById({ _id: id })
        if (!ordenp) {
            return res.status(404).json({
                ok: false,
                message: "La orden de pedido no existe",
            })
        }

        await ordenp.deleteOne()
        res.json({
            ok: true,
            message: "La orden de pedido fue eliminada de todas partes",
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

module.exports = ordenpCtrl;
