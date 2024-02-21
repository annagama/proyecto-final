const{ validationresult}=require("express-validator")
const validarerror=(req,res,next)=>{
    const resultados=validationresult(req);
    if(!resultados.isempty());
    {
        res.status(404).send({
            error:resultados.array(),
        });
        return;
    }
    next();
};
module.export={validarerror}