const { Router } = require("express");

const pedidocontroller = require("");

const { validarErrores } = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\middlewares");
const { idRequired } = require("STORE/src/middlewares/paramsmiddleware.js");
const { checkSession, checkSessionAdmin } = require("C:\Users\BEMA\Desktop\node_modules\STORE\src");

const pedidorouter = Router();

pedidorouter.get("/getAll", pedidocontroller.getAll);

pedidorouter.get("/getPedidosSinProcesar", pedidocontroller.getPedidosSinProcesar);

pedidorouter.post("/generarPedido", [checkSession, validarErrores], pedidocontroller.generarPedido);

pedidorouter.post("/procesarPedido/:id", [checkSessionAdmin, idRequired, validarErrores], pedidocontroller.procesarPedido);

pedidorouter.get("/obtenerPedidosPorUsuario", [checkSession, validarErrores], pedidocontroller.getPedidosUsuario);

pedidorouter.get("/notificacionProcesada", [checkSession, validarErrores], pedidocontroller.procesarNotificacion);

module.exports = pedidorouter;