const { Router } = require("express");
const detalle_pedidoCtrl = require('../controllers/detalle_pedido.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/listar', detalle_pedidoCtrl.listar);                                     
route.get('/listid/:id', detalle_pedidoCtrl.listid);                                   
route.post('/add', detalle_pedidoCtrl.add);
route.put('/update/:id', detalle_pedidoCtrl.update);
route.delete('/delete/:id', detalle_pedidoCtrl.delete);

module.exports = route;