const detalles_pedidoCtrl = {}

detalles_pedidoCtrl.listar = async (req, res) => {
    try {
        const detalles_pedido = await detalles_pedidoModel.find()
        res.json({
            ok: true,
            detalles_pedido,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

detalles_pedidoCtrl.add = async (req, res) => {
    try {
        const { preciounitario, cantidad } = req.body
        const newDetallesPedido = new detalles_pedidoModel({
            preciounitario,
            cantidad
        })
        await newDetallesPedido.save()
        res.json({
            ok: true,
            newDetallesPedido,
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

detalles_pedidoCtrl.update = async (req, res) => {
    try {
        const { id } = req.params
        const detalles_pedido = await detalles_pedidoModel.findById({ _id: id })
        if (!detalles_pedido) {
            return res.status(400).json({
                ok: false,
                message: "Los detalles del pedido no están registrados en la base de datos",
            })
        }

        const preciounitario= req.body.preciounitario || detalles_pedido.preciounitario
        const cantidad = req.body.cantidad || detalles_pedido.cantidad

        const detalles_pedidoUpdate = {
            preciounitario,
            cantidad
        }
        await detalles_pedido.updateOne(detalles_pedidoUpdate)
        res.json({
            ok: true,
            message: 'Los detalles del pedido fueron actualizados',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

detalles_pedidoCtrl.delete = async (req, res) => {
    try {
        const { id } = req.params
        const detalles_pedido = await detalles_pedidoModel.findById({ _id: id })
        if (!detalles_pedido) {
            return res.status(404).json({
                ok: false,
                message: "Los detalles del pedido no existen",
            })
        }

        await detalles_pedido.deleteOne()
        res.json({
            ok: true,
            message: "Los detalles del pedido fueron eliminados de todas partes",
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error.message,
        })
    }
}

module.exports = detalles_pedidoCtrl
