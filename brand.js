const { Router } = require("express");
const BrandController = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\controllers\brandcontroller.js");
const router = Router();


router.get("/getBrands", BrandController.getAll);



module.exports = router;