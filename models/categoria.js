import conecction from "../config/database.js";

const categoria={
    getAll: (callback)=>{
        conecction.query('select * from categorias',callback);
    },
    getById:(data,callback)=>{
        conecction.query('select * from categorias where id = ?',[data],callback)
    },
    create: (data,callback)=>{
        conecction.query('insert into categorias set ?',[data],callback)
    },
    update:(data,id,callback,)=>{
        conecction.query('update categorias set ? where id = ?',[data,id],callback)
    },
    delete:(id,callback)=>{
        conecction.query('delete from categorias where id = ?',[id],callback)
    }
}


export default categoria;