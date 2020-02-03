const express = require('express'),
      rutas = express.Router(),
      equipo = require('./controladorEquipo');

rutas.use('/obtener',equipo);

module.exports=rutas;