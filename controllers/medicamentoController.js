import Medicamento from "../models/medicamento.js";


const medicamentoController ={
    getAllmedicamentos: (req, res)=>{
        Medicamento.getAll((err,result)=>{
            if(err){
                console.error("error al obtener los medicamentos",err)
                res.status(500).json({error:"error interno del servidor"})
                return;
            }
            res.status(200).json(result);

        });
    },
    getbyid: (req, res)=>{
        const id = req.params.id;

        Medicamento.getById(id,(err, result)=>{
            if (err){
                console.error(err)
                res.status(500).json({error:"error interno del servidor"});
                return;
            }
            res.status(200).json(result);
        });
    },
    create: (req,res)=>{
       const {nombre, descripcion, id_categoria}=req.body;
       const data= {
         nombre,
         descripcion,
         id_categoria
       }
        Medicamento.create(data,(err,result)=>{
            if(err){
                console.error(err.json());
                res.status(500).json({error:"error interno del servidor al crear"});
                return;
            }
            res.status(200).json(result);
            
        });
    }
}
export default medicamentoController;

export const updateMedicamento = (req,res)=>{
    const {nombre,descripcion,id_categoria}=req.body;
    const id= req.params.id;
    const data = {
        nombre,
        descripcion,
        id_categoria,
    }
    Medicamento.update(data,id,(err,result)=>{
        if(err){
            console.error(err);
            res.status(500).json({error:"error interno del servidor al actualizar"});
            return;
        }
    res.status(200).json(result)
    })
}
export const deleteMedicamento =(req,res)=>{
    const id= req.params.id;

    Medicamento.delete(id,(err,result)=>{
        if(err){
            console.log(err);
            res.status(500).json({error:"error al eliminar"})
            return;
        }
        res.status(200).json(result);
    })
}