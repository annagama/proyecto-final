const { Router } = require("express");
const OrdenCompraController = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\controllers\ordenar.js");
const PedidoController = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\controllers\pedido.js");
const OrderRouter = Router();
const { validarErrores } = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\middlewares");
const { checkSession, checkSessionAdmin } = require("C:\Users\BEMA\Desktop\node_modules\STORE\src");
const { idRequired } = require("STORE/src/middlewares/paramsmiddleware.js");
OrderRouter.post("/addproductcarrito", [checkSession, validarErrores], ordencompracontroller.addcarrito);

OrderRouter.post("/deleteproduct", [checkSession, validarErrores], ordencompracontroller.deleteproductcarrito);

OrderRouter.get("/getuserorder", [checkSession, validarErrores], ordencompracontroller.getuserorderinprocess);

OrderRouter.get("/getarticulosorden/:id", [checkSessionAdmin, idRequired, validarErrores], pedidocontroller.getarticulosorden);


module.exports = OrderRouter;