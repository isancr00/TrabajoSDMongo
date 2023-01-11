const app = require('./app');
const mongoose = require('mongoose')
var express = require('express')
var adminRouter = express.Router()

adminRouter.post('/insertar/:datos', function(req,res){
    res.send("Insertada")
    console.log(req.params.datos)
    insertarCiudad(req.params.datos)
})
adminRouter.get('/personas', function(req,res){
    console.log("Devuelve personas")
    getPersonas(res)
})

app.use(adminRouter)

mongoose.connect('mongodb://root:rootpassword@mongodb:27017/', {
        useUnifiedTopology: true,
        useNewUrlParser: true

    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))


const Persona = mongoose.model('Persona',{ nombre: String, apellidos :String ,edad :Number, genero:String, ocupacion: String})


async function getPersonas(res){
    const result = await Persona.find();
    console.log("El Resultado es" + result);
}


async function main(){
    await app.listen(4000);
    console.log('Server is running');
}

main();