const hg=("C:\Users\BEMA\Desktop\node_modules\STORE\src\hg\index.js");
const{querytype}=require("sequelize");
const getall=(current_user)=>{
    return hg.query(
        "seleccione pedido",{type:querytype.seleccione});
    }
    const generarPedido = async (vObj) => {
        const result = await hg.query(
            "INSERT INTO pedido (id_orden_compra, ftotal, benvio) VALUES (${vObj.id_orden_compra}, ${vObj.ftotal}, ${vObj.benvio})"
        );
        const orderId = result[0];
        return orderId;
    };
    const procesarPedido = (idPedido) => {
        return hg.query(
            "UPDATE pedido set bprocesado = 1 where idpedido = ${idPedido}"
        );
    };
    const procesarPedidoNotificacion = (idsOrden) => {
        return hg.query(
            "UPDATE pedido set bnotificado = 1 where id_orden_compra in (${idsOrden})"
        );
    };
    module.exports = { getall, generarPedido, procesarPedido, procesarPedidoNotificacion }; 