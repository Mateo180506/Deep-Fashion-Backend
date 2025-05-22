
import mongoose from 'mongoose';

// Define el Schema (Estructura de archivos)
const miArmarioSchema = new mongoose.Schema(
    // Define la estructura de datos del documento
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            min: 0,
            default: 0
        },
        stock: {
            type: Number,
            min: 1,
            default: 1
        },
        category: {
            // TODO: Vincular con un Id al CategorySchema
            type: String,
            default: 'non-category'
        },
        urlImage: {
            type: String
        },
        state: {
            type: Boolean,
            default: true
        },
        // owner: {
            // TODO: Vincular con un Id al UserSchema
        // }
    },
    // Configuracion de la estructura de datos
    {
        timestamps: true,       // Agrega las propiedades createdAt, updatedAt (Fechas de Creacion y Actualizacion del documento)
        versionKey: false       // Eliminar la propiedad __v (Contador de modificaciones del Schema)
    });

// Define el Modelo: Vincular el Schema a una collection especifica
const productModel = mongoose.model( 
    'miArmario',                 // Nombre de la collection a la que lo voy a asociar
    miArmarioSchema               // La estructura de datos a la que lo vamos a vincular
);


// Exponemos el Modelo para ser usado por cualquier otro archivo en mi aplicacion
export default miArmarioModel;