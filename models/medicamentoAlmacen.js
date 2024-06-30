import conecction from "../config/database.js";


const medicamentoAlmacenado={
    getAll: (callback)=>{
        conecction.query('SELECT medicamentos.nombre as nombre, almacenes.nombre as almacen, medicamentos_almacenes.cantidad FROM medicamentos_almacenes JOIN medicamentos ON medicamentos_almacenes.id_medicamento = medicamentos.id JOIN almacenes ON medicamentos_almacenes.id_almacen = almacenes.id',callback)
    }
}


export default medicamentoAlmacenado;