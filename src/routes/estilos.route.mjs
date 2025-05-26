import express from "express"; //importo la dependencia
import { createEstilos, getAllEstilos } from "../controllers/estilos.controllers.mjs";

const router = express.Router(); //invocando router de express

// Definir las rutas para la entidad estilos.
router.post( "/api/estilos", createEstilos );
router.get( "/api/estilos",  getAllEstilos );


// Exponer el router de este archivo para ser usado por otros en la aplicacion
export default router;