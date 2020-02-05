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
        idEquipo: body.idEquipo,
        nombre: body.nombre,
        pais: body.pais,
    }, (err, rest) => {
        if (err) {
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })
    //metodo eliminar
}).post('/eliminar', (req, res) => {
    equipo.remove({ idEquipo: req.body.idEquipo }, (err, docs) => {
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
                nombre: body.nombre,
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
    .post('/sumar', (req, res) => {// metodo para sumar dos numeros dados en postman

        var num1 = parseInt(req.body.num2);// obtener desde postman
        var num2 = parseInt(req.body.num2);
        var respuesta = num1 + num2;

        res.status(200).json(respuesta)
    }).
    post('/mayor', (req, res) => {// metodo para saber el mayor de dos numeros dados en postman

        var num1 = parseInt(req.body.num2);
        var num2 = parseInt(req.body.num2);
        if (num1 > num2) {
            res.status(200).json(num1)
        } else {
            res.status(200).json(num2)
        }
    }).// metodo para saber si es numero primo primo
    post('/saberPrimo', (req, res) => {
        
        var num = parseInt(req.body.num);
        const esPrimo = nume => {
            // Casos especiales
            if (num == 0 || num == 1 || num == 4) return false;
            for (let x = 2; x < num / 2; x++) {
                if (num % x == 0) {
                    const a = "si es primo";
                res.status(200).json(a)
                }return false;
            }
            // Si no se pudo dividir por ninguno de los de arriba, sí es primo
            const b = "no es primo";
                res.status(200).json(b)
            return true;
        }
        
        /*if (nPrimo/nPrimo==1 && nPrimo/1==nPrimo) {
        for (var i = 0; i = nPrimo; i--) {
            
                const a = "si es primo";
                res.status(200).json(a)
        }
    }else {
                const b = "no es primo";
                res.status(200).json(b)
            }
        }*/
        })

module.exports = rutas;
