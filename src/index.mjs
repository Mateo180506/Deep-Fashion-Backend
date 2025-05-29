//paso 1: Importacion de la dependencia express
// const express = require(`express`);//comandjs
import express from "express"; //Es moderna
import outfitIA from './routes/outfitIA.route.mjs';
import dbConnect from "./config/mongo.config.mjs";//importamos la conexion a la base de datos

//paso 2: Invoca la ejecucion de expres
const app = express();

//Invocar la configuracion de la cenexion a la base de datos
dbConnect();
app.use(express.json())
app.use(outfitIA);

//paso 4: Lanza el servidor web usando express en el puerto 3000
//                       http://localhost:<port>
app.listen( 3000,() => {
    console.log("Servidor  Lanzado Correctamente ")
} );
