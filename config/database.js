import mysql from "mysql2"
import dotenv from 'dotenv'

dotenv.config();

const conecction = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })
conecction.connect((err)=>{
    if (err){
        console.log(err);

    }
    console.log('conected to the database ajua');
})


export default conecction;