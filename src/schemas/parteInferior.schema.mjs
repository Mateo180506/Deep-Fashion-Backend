import mongoose from 'mongoose';

// Define el Schema (Estructura de archivos)
const parteInferiorSchema = new mongoose.Schema(
    // Define la estructura de datos del documento
    {
      "name": {
        type: String,
        trim: true,
        required : [true , 'el nombre de la prenda es requerida']
      },

      "size":{
        type: String,
        trim: true,
        required: [true, 'La talla de la prenda es requerida' ]
      },

      "description":{
        type: String,
        trim: true
      },

      "color":{
        type: String,
        trim: true,
        required: [ true, 'El color de la prenda es requerida']
      },
    },
    // Configuracion de la estructura de datos
    {
        timestamps: true,       // Agrega las propiedades createdAt, updatedAt (Fechas de Creacion y Actualizacion del documento)
        versionKey: false       // Eliminar la propiedad __v (Contador de modificaciones del Schema)
    });

// Define el Modelo: Vincular el Schema a una collection especifica
const parteInferiorModel = mongoose.model( 
    'parteInferior',                 // Nombre de la collection a la que lo voy a asociar
    parteInferiorSchema          // La estructura de datos a la que lo vamos a vincular
);


// Exponemos el Modelo para ser usado por cualquier otro archivo en mi aplicacion
export default parteInferiorModel;