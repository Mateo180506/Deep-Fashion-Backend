import mongoose from "mongoose";
//Definer la estructura del documento que se va a registrar
const userSchema= new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        required :[true,'El nombre del usuario es obligatorio'] //campo obligatorio
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, introduce un correo electrónico válido.'],
        unique: true,
        required :[true,'El correo del usuario es obligatorio ']
    },
    password:{
        type:String,
        traim:true,
        min:[6,'La constraseña debe tener al menos 6 caracteres'],
        max:[12,'La constraseña debe tener maximo 12 caracteres'],
        required :[true,'La contraseña es obligatoria ']
    },
    role:{
        type:String,
        enum:["admin","usuario","desarrollador"],
        default:'usuario'
    }

},{//configurrar comportamiento de la estructura
timestamps:true,   //crea dos campos:'CreatedAt'fecha que fue creado el documento,'updateAt'actualiza los datos
versionKey:false //contador de la version del documento
});

//Definir el modelo 
const userModel=mongoose.model(
    'users',//define el nombre de la coleccion donde se guardan los documentos
    userSchema
);
//exportal el modelo a el resto de la aplicacion
export default userModel;
