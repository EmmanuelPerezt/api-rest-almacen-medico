import Medicamento from "../models/medicamento.js";


const medicamentoController ={
    getAllmedicamentos: (req, res)=>{
        Medicamento.getAll((err,result)=>{
            if(err){
                console.error("error al obtener los medicamentos",err)
                res.status(500).json({error:"error interno del servidor"})
                return;
            }
            res.status(200).json(result)

        })
    }
}
export default medicamentoController;