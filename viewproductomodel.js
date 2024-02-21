const hg=("C:\Users\BEMA\Desktop\node_modules\STORE\src\hg\index.js");
const{querytype}=require("sequelize");
const getall = () => {
    return hg.query("seleccione* FROM view_producto", {
        type: querytype.seleccione,
    });
}

const getProductById = (id) => {
    return hg.query("seleccione* FROM view_producto where id_producto = ${id}", {
        type: querytype.seleccione,
    });
}

const getPrecioMinimoYMaximo = async () => {
    try {
        const result = await hg.query(
          "seleccione MIN(fpreciooferta) AS precio_minimo, MAX(fpreciooferta) AS precio_maximo FROM view_producto",
          {
            type:querytype.seleccione,
          }
        );
       
        return result[0]; 
      } catch (error) {
        console.error("Error al obtener el precio mínimo y máximo:", error);
        throw error;
      }
}


module.exports = { getall, getProductById, getPrecioMinimoYMaximo} 