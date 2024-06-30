import dotenv  from 'dotenv';
import express from 'express';
import medicamentoRoutes from './routes/medicamentoRoutes.js'
import categoriaRoutes from './routes/categoriaRoutes.js';
import medicamentoAlmacenadoRoutes from './routes/medicamentoAlmacenRoutes.js'

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/medicamentos',medicamentoRoutes)
app.use('/categorias',categoriaRoutes)
app.use('/almacenados',medicamentoAlmacenadoRoutes)



app.listen(port || 3000);

console.log(`api corriendo en puerto: ${port}`)