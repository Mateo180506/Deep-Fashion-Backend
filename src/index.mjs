//paso 1: Importacion de la dependencia express
// const express = require(`express`);//comandjs
import express from "express"; //Es moderna
import estilos from "./routes/estilos.route.mjs";
import dbConnect from "./config/mongo.config.mjs";//importamos la conexion a la base de datos

//paso 2: Invoca la ejecucion de expres
const app = express();

//Invocar la configuracion de la cenexion a la base de datos
dbConnect();
app.use ( express.json() );
//paso 3: Crear los EndPoins(puntos de entrada)

app.use ( estilos );
//paso 4: Lanza el servidor web usando express en el puerto 3000
//                       http://localhost:<port>
app.listen( 3000,() => {
    console.log("Servidor  Lanzado Correctamente ")
} );
