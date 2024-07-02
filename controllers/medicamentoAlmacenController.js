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
export const getMedAlmById =(req,res)=>{
    const id=req.params.id;
    medicamentoAlmacenado.getById(id,(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json({error:"error innterno servidor",err});
        }
        res.status(200).json(result)
    })
}