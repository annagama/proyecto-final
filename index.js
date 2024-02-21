const{sequelize}=require("sequelize");
const hg= new sequelize({
    host: "localhost",
    port:"3000",
    database:"guembemini",
    username: "ana",
    password:"jfdhjf545",
    dialect:"mysql",
});
module.export=hg;