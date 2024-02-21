const hg=("C:\Users\BEMA\Desktop\node_modules\STORE\src\hg\index.js");
const{querytype}=require("sequelize");
const addcarrito=(idorden, vobj)=>{
    return hg.query(
        "insertar compra de articulo(id orden de compra, id producto, ncantidad)",
        values ("${idorden}","${vobj.id_producto}"
        )
        );
}
const editcarrito=(idorden, vobj)=>{
    return hg.query(
        "update orden de compra articulo ncantidad=ncantidad+1",
        "where id de orden de compra ${idorden} y id de producto ${vobj.id_producto}");
    }
const deleteproducto=(idordencompraproducto)=>{
    return hg.query(
            "delete ordende compra por articulo",
            "where id de orden de compra por articulo ${idordencompraproducto}");
        }
const productoorden=(idorden)=>{
      return hg.query(
        "seleccione compra por producto",
        "where id de orden compra ${idorden}",{
            type:querytype.seleccione});
        }
const productoidorden=(idorden, idproducto)=>{
    return hg.query(
        "seleccione orden de compra por producto",
        "where id de orden de compra ${idorden} and id de producto ${idproducto}",{
            type:querytype.seleccione}
    );
        }
module.exports={addcarrito,editcarrito,deleteproducto,productoidorden,productoorden}