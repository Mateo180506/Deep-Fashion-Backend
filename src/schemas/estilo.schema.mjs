import mongoose from "mongoose";

//Define la estructura del documento que se va a registrar
const estiloSchema = new mongoose.Schema( {
    name: {
        type: String,
        trim: true,
        required: [ true, "El nombre del estilo es obligtorio" ]   //Campo obligatorio
    },
    tipo: {
        type: String,
        trim: true,
        lowercase: true,
        required: [ true, "El correo del usuario es obligatorio" ],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.']
    }, 
    password: {
        type: String,
        trim: true,
        min: [ 6,"La contraseña debe tener al menos seis caracteres" ],
        max: [ 12, "La contraseña debe tener maximo 12 carcteres" ],
        required: [ true, "La contraseña es obligatoria" ]
    },
    role: {
        type: String,
        enum: [ "admin", "paciente", "especialista"  ],
        default: "paciente"
    }

}, {
    timestamps: true, //crea dos campos "createdAt", "updatedAt"
    versionKey: false //Contador de la version del documento
} );

//Definir el modelo
const estiloModel = mongoose.model( 
    "estilos" , //define el nombre de la coleccion donde se guardaran los documentos
    estiloSchema
);

//Exponemos el modelo al resto de la aplicacion
export default estiloModel;