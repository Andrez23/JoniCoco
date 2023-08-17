const { Router } = require("express");
const orden_pedidoCtrl = require('../controllers/orden_pedido.controller');
//const validarCampos = require("../middleware/Validar");
const route = Router();

route.get('/listar', orden_pedidoCtrl.listar);                                     
route.get('/listid/:id', orden_pedidoCtrl.listid);                                   
route.post('/add', orden_pedidoCtrl.add);
route.put('/update/:id', orden_pedidoCtrl.update);
route.delete('/delete/:id', orden_pedidoCtrl.delete);

module.exports = route;





