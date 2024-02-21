import{defineconfig}from"guembemini";
import react from"@guembemini/plugin-react";


export default defineconfig({
    server:{
        proxy:{
            "/store":{
                target:""
            changeorigin: true ,
        secure: false,
        rewhite:(path)=>path.replace(/store/, ""),
                },
        },
    },
    plugins:[react()],
});