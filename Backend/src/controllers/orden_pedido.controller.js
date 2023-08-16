const orden_pedidoCtrl = {}

orden_pedidoCtrl.listar = async (req, res) => {
    try {
        const orden_pedido = await orden_pedidoModel.find()
        res.json({
            ok: true,
            orden_pedido,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

orden_pedidoCtrl.add = async (req, res) => {
    try {
        const { estadocompra, fechacreacion, preciototal, } = req.body
        const newOrdenPedido = new orden_pedidoModel({
            estadocompra, 
            fechacreacion,
            preciototal,
            
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

orden_pedidoCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const orden_pedido = await orden_pedidoModel.findById({ _id: id })
        if (!orden_pedido) {
            return res.status(400).json({
                ok: false,
                message: "La orden de pedido no está registrada en la base de datos",
            })
        }

        const estadocompra = req.body.estadocompra || orden_pedido.estadocompra
        const fechacreacion = req.body.fechacreacion || orden_pedido.fechacreacion
        const preciototal = req.body.preciototal || orden_pedido.preciototal
        const orden_pedidoUpdate = {
            estadocompra, 
            fechacreacion,
            preciototal,
            
        }
        await orden_pedido.updateOne(orden_pedidoUpdate)
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

orden_pedidoCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params
        const orden_pedido = await orden_pedidoModel.findById({ _id: id })
        if (!orden_pedido) {
            return res.status(404).json({
                ok: false,
                message: "La orden de pedido no existe",
            })
        }

        await orden_pedido.deleteOne()
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

module.exports = orden_pedidoCtrl;
