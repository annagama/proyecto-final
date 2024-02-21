const hg=("C:\Users\BEMA\Desktop\node_modules\STORE\src\hg\index.js");
const{querytype}=require("sequelize");
const getcategoria=()=>{
    return hg.query("seleccione categoria",{
        type:querytype.seleccione
    })
}
const getcategoriaid=(ncategoria)=>{
    return hg.query("seleccione categoria ${ncategoria}",{
        type:querytype.seleccione
    })
}
module.export={getcategoria,getcategoriaid}