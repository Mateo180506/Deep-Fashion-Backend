
// const express = require(`express`);//comandjs
import express from 'express'; //Es moderna
import users from './routes/user.route.mjs';
import estilos from "./routes/estilos.route.mjs";
import dbConnect from "./config/mongo.config.mjs";//importamos la conexion a la base de datos

const app = express();
    dbConnect();
app.use( express.json());
app.use(users);
app.use(estilos);
app.listen( 3000,() => {
    console.log("Servidor  Lanzado Correctamente ")
} );
