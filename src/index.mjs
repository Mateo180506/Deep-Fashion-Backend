//paso 1: Importacion de la dependencia express
// const express = require(`express`);//comandjs
import express from "express"; //Es moderna
import products from "./routes/product.route.mjs" //importamos las rutas de la entidad producto
//paso 2: Invoca la ejecucion de expres
const app = express();

//paso 3: Crear los EndPoins(puntos de entrada)

app.use(products);//impelementar la ruta como un Middleware de Express

//paso 4: Lanza el servidor web usando express en el puerto 3000
//                       http://localhost:<port>
app.listen( 3000,() => {
    console.log("Servidor  Lanzado Correctamente ")
} );
