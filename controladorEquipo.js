var equipo = require('./modeloEquipo'),
    express = require('express'),
    rutas = express.Router();

rutas.post('/', (req, res) => {
    equipo.find({}, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })

}).post('/crear', (req, res) => {
    var body = req.body;
    equipo.insertMany({
        idEquipo:body.idEquipo,
        nombre:body.nombre,
        pais:body.pais,
    }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
//metodo eliminar
}).post('/eliminar', (req, res) => {
    equipo.remove({ idEquipo:req.body.idEquipo }, (err, docs) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })

}).post('/editar', (req, res) => {
    var body = req.body;
    equipo.update({ idEquipo: body.idEquipo },
        {
            $set: {
                nombre:body.nombre,
                pais: body.pais,
            }
        }, (err, rest) => {
            if (err) {
                console.error(err)
                throw err;
            }
            res.status(200).json(rest)
        })
})

    module.exports = rutas;