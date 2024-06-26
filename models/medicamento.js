import conecction from "../config/database.js";


const Medicamento ={
    getAll : (callback)=>{
        conecction.query('select * from medicamentos',callback)
    },
    getById : (id, callback)=>{
        conecction.query('select * from medicamentos where id = ?',[id],callback)
    },
    create: (medicamento,callback)=>{
        conecction.query('insert into medicamentos set ?',[medicamento],callback)
    },
    update: (id, medicamento, callback)=>{
        conecction.query('update medicamentos set ? where id = ?',[medicamento,id], callback)
    },
    delete: (id,callback)=>{
        conecction.query('delete from medicamentos where id = ?',[id],callback)
    }
}


export default Medicamento;