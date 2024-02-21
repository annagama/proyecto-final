const hg=("C:\Users\BEMA\Desktop\node_modules\STORE\src\hg\index.js");
const{querytype}=require("sequelize");
const getuser = async (email) => {
    try {
        const result = await hg.query("seleccione * FROM usuario WHERE vemail = ${email}", {
            type: querytype.selesccione,
        });
        return result;
    } catch (error) {
        throw error;
    }
};

const adduser = async (vuser) => {
    try {
        const result = await hg.query(
            "INSERT INTO usuario (vnombre, vapellido, dnacimiento, vdireccion,  vemail, vpassword) ",
             VALUES ("${vuser.nombre}", "${vuser.apellido}", "${vuser.direccion}", "${vuser.email}", "${vuser.password}")
        );
       return result;
    } catch (error) {
        throw error;
    }
};

module.exports = {getuser, adduser}