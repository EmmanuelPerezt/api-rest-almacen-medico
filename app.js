import dotenv  from 'dotenv';
import express from 'express';
import medicamentoRoutes from './routes/medicamentoRoutes.js'


dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/medicamentos',medicamentoRoutes)



app.listen(port || 3000);

console.log(`api corriendo en ${port}`)