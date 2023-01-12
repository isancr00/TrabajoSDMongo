const app = require('./app');
const mongoose = require('mongoose')

mongoose.connect('mongodb://root:rootpassword@mongodb:27017/', {
        useUnifiedTopology: true,
        useNewUrlParser: true

    }).then(db => console.log('conexion exitosa'))
    .catch(err => console.log('error: ', err))

const Persona = mongoose.model('Persona',{ nombre: String,apellidos:String, edad:Number,genero:String,ocupacion:String})

function insertarPersona(nombre,apellidos,edad,genero,ocupacion){
    var persona = new Persona({nombre:nombre,apellidos:apellidos,edad:edad,genero:genero,ocupacion:ocupacion})

    persona.save().then(() => console.log('Persona creada'))
}

 function verPersonas(){
    const result =  Persona.find();
    console.log('Las personas registradas son: ' + result)
}

async function main(){
    await app.listen(3000);
    console.log('Server is running');
}

main();

insertarPersona('Marco','Diaz Gonzalez',23,'Male','Working');
insertarPersona('Lucas','Gómez Laso',45,'Male','Working');
insertarPersona('Gala','Alonso Gonzalez',16,'Female','Studying');
insertarPersona('Pablo','Diaz Gonzalez',18,'Male','Studying');

verPersonas();


