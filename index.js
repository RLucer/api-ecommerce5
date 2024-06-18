const connectDB = require('./src/config/db.js');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes/index');
const app = express();
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT || 3000;

// Habilitar CORS
app.use(cors());


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.use(express.json());
connectDB();



app.use('/v1', routes);

app.get('/', (req, res) => {
    res.send('todo OK');
})

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
})


//http:localhost:3000/v1