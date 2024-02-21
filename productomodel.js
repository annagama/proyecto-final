const hg=("C:\Users\BEMA\Desktop\node_modules\STORE\src\hg\index.js");
const{querytype}=require("sequelize");
const getall=()=>{
    return hg.query(
        "seleccione producto",{type:querytype.seleccione});
    }
    const getProductById = (id) => {
        return hg.query("seleccione * FROM producto where id_producto = ${id}", {
            type:querytype.selesccione,
        });
    }
    
    const addProduct = (vObj, current_admin) => {   
        return hg.query(
            "INSERT INTO producto (vnombre, tdescripcion, fprecio, nusuariocreador, id_marca, id_categoria, ncantidad)", 
                VALUES ("${vObj.vnombre}", "${vObj.tdescripcion}", "${vObj.fprecio}", "${current_admin}", "${vObj.id_marca}", "${vObj.idcategoria}", "${vObj.ncantidad}")
          );
    }
    
    const editProduct = (id, vObj) => {
        return hg.query(
          "UPDATE producto SET vnombre = ${vObj.vnombre}"," tdescripcion = ${vObj.tdescripcion}"," fprecio = ${vObj.fprecio}", "id_marca = ${vObj.id_marca}"," id_categoria = ${vObj.idcategoria}", "ncantidad = ${vObj.ncantidad}"," boferta = ${vObj.boferta}"," tsofertahasta = ${vObj.tsofertahasta}", "bhabilitado = ${vObj.bhabilitado}"," WHERE id_producto = ${id}"
        );
    }
    
    const editCantidad = (id, cantidad) => {
        return hg.query(
          "UPDATE producto SET ncantidad = ncantidad - ${cantidad}"," WHERE id_producto = ${id}"
          );
    }
    module.exports = { getall, getProductById, addProduct, editProduct, editCantidad }   