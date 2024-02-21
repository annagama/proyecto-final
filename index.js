
//tareas de registro api 
const express=require("express");
const session=require("express-session");
const tareasrouter = require("./routes/tareas.routes");
const hg=require("./hg");
const port=3000;
const productorouter=require("./router/productorouter");
const brandrouter=require("./router/brandrouter");
const paginarouter=require("./router/paginarouter");
const userrouter=require("./router/userrouter");
const pedidorouter=require("./router/pedidorouter");
const ordenarrouter=require("./router/ordenarrouter");
const categoriarouter=require("./router/categoriarouter");

const middlewaredeprueba=(req, res, next)=>{
    console.log("llego una peticion", req.body);
    next();

};
const app= express();
app.use(express.json());
app.use(session({
    secret:"topsecret",
    resave:"false",
    saveuninitialized:"false",
    rolling:true,
    cookie:{
        maxAge:"60*60*1000"
    }
}))
//middleware de sesion aqui!
app.use(express.json());
app.use(middlewaredeprueba);
app.use("/producto", productorrouter);
app.use("/brand", brandrouter);
app.use("/", paginarouter);
app.use("/user", userrouter);
app.use("/pedido", pedidorouter);
app.use("/ordenar", ordenarrouter);
app.use("/categoria", categoriarouter);

app.listen(port, ()=>{
    hg.authenticate.then;{()=> 
    console.log("base de datos")};
    console.log("servidor corriendo en el puerto:{port}");
});




