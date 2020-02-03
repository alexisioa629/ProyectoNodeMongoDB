var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb+srv://alexisioa629:alexisioa629@cluster0-p8fvj.gcp.mongodb.net/libertadores?retryWrites=true&w=majority',{ useUnifiedTopology: true });

mongoose.connection.on('open',(ref)=>{
    console.log('Conectado a base de datos')
})

module.exports=connection;