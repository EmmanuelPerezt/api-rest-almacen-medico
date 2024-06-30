import categoria from "../models/categoria.js";



export const getAllCategorias = (req,res)=>{
    
    categoria.getAll((err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json({error:"error interno del servidor"});
            return;
        }
        res.status(200).json(result);
    })
}

export const createCategorias = (req,res)=>{
   const {nombre} = req.body;
   const data ={nombre}
    categoria.create(data, (err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json({error:"error interno del servidor al crear",show:err});
            return;
        }
        res.status(200).json(result);
    })
}
export const deleteCategorias = (req,res)=>{
    const id=req.params.id;
     categoria.delete(id, (err,result)=>{
         if(err){
             console.log(err)
             res.status(500).json({error:"error interno del servidor al crear",show:err});
             return;
         }
         res.status(200).json(result);
     })
 }
 export const updateCategorias = (req,res)=>{
    const data={
        nombre:req.body.nombre
    }
    const id=req.params.id;
     categoria.update(data, id,(err,result)=>{
         if(err){
             console.log(err)
             res.status(500).json({error:"error interno del servidor al crear",show:err});
             return;
         }
         res.status(200).json(result);
     })
 }