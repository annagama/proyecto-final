const { Router } = require("express");

const usercontroller = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\controllers\user.js");
const UserRouter = Router();

const { validarErrores } = require("STORE/src/middlewares");
const { validatenome, validateapellido, validatedireccion, validateemail, validatePassword } = require("C:\Users\BEMA\Desktop\node_modules\STORE\src\middlewares\usermiddle.js");

UserRouter.post("/signUp", [validatenome, validateapellido, validatedireccion, validateemail, validatepassword, validarerrores], usercontroller.adduser);

UserRouter.post("/logIn", [validateemail, validatepassword, validarerrores], usercontroller.logIn);


module.exports = UserRouter;