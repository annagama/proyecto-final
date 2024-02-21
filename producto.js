const { Router } = require("express");
const ProductController = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\controllers\producto.js")
const { validarErrores } = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\middlewares");
const { idRequired } = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\middlewares\paramsmiddleware.js");
const { validateName, validateDescription, validatePrice, validateBrand, validateCategoria, existCategoria, existMarca } = require('../Middlewares/ProductMiddleware');
const { checkSessionAdmin, checkSession } = require("C:\Users\BEMA\Desktop\node_modules\STORE\src")
const ProductRouter = Router();
ProductRouter.get("/getAll", ProductController.getAll);
ProductRouter.post("/addProduct", [checkSessionAdmin, validateName, validateDescription, validatePrice, validateBrand, validateCategoria, existCategoria, existMarca, validarErrores], ProductController.addProduct);
ProductRouter.put("/editProduct/:id", [checkSessionAdmin, idRequired, validateName, validateDescription,  validatePrice, validateBrand, validateCategoria, existCategoria, existMarca, validarErrores], ProductController.editProduct);
ProductRouter.get("/getProductById/:id", [idRequired, validarErrores], ProductController.getProductById);
ProductRouter.get("/getPrecioMinimoYMaximo",  ProductController.getPrecioMinimoYMaximo);
module.exports = ProductRouter;