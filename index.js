//paso 1: Importacion de la dependencia express
// const express = require(`express`);//comandjs
import express from "express"; //Es moderna

//paso 2: Invoca la ejecucion de expres
const app = express();

//paso 3: Lanza el servidor web usando express en el puerto 3000
app.listen( 3000,() => {
    console.log(`Servidor  Lanzado Correctamente `)
} );
