var mongoose = require("mongoose"),
    Schemas = mongoose.Schema;
    
var valorSchema = new Schemas ({
    idEquipo:{type:Number,trim:true},
    nombre:{type:String,trim:true},
    pais:{type:String,trim:true},
})
var equipo = mongoose.model('grupo1',valorSchema);

module.exports=equipo;
