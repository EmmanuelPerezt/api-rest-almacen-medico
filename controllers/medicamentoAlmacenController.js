import medicamentoAlmacenado from "../models/medicamentoAlmacen.js";


export const getAllMedAlm =(req,res)=>{
    medicamentoAlmacenado.getAll((err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json({error:"error interno",err})
        }
    res.status(200).json(result)
    })
}