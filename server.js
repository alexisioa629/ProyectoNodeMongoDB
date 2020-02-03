const express = require('express');
const body_parser = require('body-parser');
const app = express();
var connection = require('./conexionBaseDatos');
const rutas  = require('./rutas.js');


app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.use('/',rutas);

var port = process.env.PORT || 3000// que conecte con el puerto que da el navegador

app.listen(port,() =>{
    console.log('Iniciado en el Puerto ', port)
})