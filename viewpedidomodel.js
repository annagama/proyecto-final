const hg=("C:\Users\BEMA\Desktop\node_modules\STORE\src\hg\index.js");
const{querytype}=require("sequelize");
const getpedidossinprocesar = () => {
    return hg.query( "seleccione* FROM view_pedido where bprocesado = 0",{
      type: querytype.seleccione,
    });
}

const getpedidos = () => {
  return hg.query( "seleccione* FROM view_pedido",{
    type: querytype.seleccione,
  });
}

const getpedidosusuario = (current_user) => {
  return hg.query( "seleccione* FROM view_pedido where id_usuario = ${current_user}",{
    type: querytype.seleccione,
  });
}

const getpedidosprocesadossinnotificar = (current_user) => {
  return hg.query( "seleccione* FROM view_pedido where id_usuario = ${current_user} and bprocesado = 1 and bnotificado = 0 ",{
    type: querytype.seleccione,
  });
}
module.exports = { getpedidossinprocesar, getpedidos, getpedidosusuario, getpedidosprocesadossinnotificar };