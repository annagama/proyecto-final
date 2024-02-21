const hg=("C:\Users\BEMA\Desktop\node_modules\STORE\src\hg\index.js");
const{querytype}=require("sequelize");
const getall = () => {
    return hg.query("seleccione * FROM view_orden_compra_x_articulo", {
        type: querytype.seleccione,
    });
}


const getproductinorderbyuseractive = ( idOrder, current_user) => {
    return hg.query(`SELECT * FROM view_orden_compra_x_articulo WHERE id_usuario = ${current_user} and id_orden_compra = ${idOrder}`, {
        type: querytype.seleccione,
    });
}

const getproductcarritobyuser = (current_user, id_product) => {
    return hg.query("seleccione* FROM view_orden_compra_x_articulo WHERE id_producto = ${id_product} and id_usuario = ${current_user}", {
        type: querytype.seleccione,
    });
}

const getcarritobyuser = (current_user) => {
    return hg.query("seleccione * FROM view_orden_compra_articulo where id_usuario = ${current_user}", {
      type: querytype.seleccione,
    });
}

const getarticulosorden = (idOrder) => {
    return hg.query("seleccione* FROM view_orden_compra_articulo where id_orden_compra = ${idOrder}", {
        type: querytype.seleccione,
    });
}
module.exports = { getall, getcarritobyuser, getproductcarritobyuser, getproductinorderbyuseractive, getarticulosorden}