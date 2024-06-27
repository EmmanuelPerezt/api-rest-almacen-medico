import conecction from "../config/database.js";


const Medicamento ={
    getAll : (callback)=>{
        conecction.query('select * from medicamentos',callback)
    },
    getById : (id, callback)=>{
        conecction.query('select * from medicamentos where id = ?',[id],callback)
    },
    create: (data,callback)=>{
        conecction.query('insert into medicamentos set ?',data,callback)
    },
    update: (data, id, callback)=>{
        conecction.query('update medicamentos set ? where id = ?',[data,id], callback)
    },
    delete: (id,callback)=>{
        conecction.query('delete from medicamentos where id = ?',[id],callback)
    }
}


export default Medicamento;