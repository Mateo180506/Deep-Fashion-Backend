
// const express = require(`express`);//comandjs

import express from 'express'; //Es moderna
import users from './routes/user.route.mjs';
import outfitIA from './routes/outfitIA.route.mjs';
import estilos from "./routes/estilos.route.mjs";
import miArmario from "./routes/miArmario.route.mjs"

import dbConnect from "./config/mongo.config.mjs";//importamos la conexion a la base de datos

//paso 2: Invoca la ejecucion de expres
const app = express();
    dbConnect();
app.use( express.json());
app.use(users);
app.use(estilos);
app.use(outfitIA);
app.use (miArmario);

//paso 4: Lanza el servidor web usando express en el puerto 3000
//                       http://localhost:<port>

//                       http://localhost:3000
app.listen( 3000,() => {
    console.log("Servidor  Lanzado Correctamente ")
} );


