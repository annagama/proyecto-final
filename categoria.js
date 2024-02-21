const { Router } = require("express");
const CategoriaRouter = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\controllers\categoria.js");
const router = Router();


router.get("/", CategoriaRouter.getCategorias);



module.exports = router;