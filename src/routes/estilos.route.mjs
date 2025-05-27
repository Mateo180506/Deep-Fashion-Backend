import express from "express"; //importo la dependencia
import { createEstilos, getAllEstilos, getEstilosById, removeEstilosById, updateEstilosById } from "../controllers/estilos.controllers.mjs";

const router = express.Router(); //invocando router de express

// Definir las rutas para la entidad estilos.
router.post( "/api/estilos", createEstilos );
router.get( "/api/estilos",  getAllEstilos );
router.get( "/api/estilos/:id", getEstilosById );   //id (Paramentrizar la ruta: creamos una especie de variable)
router.delete( "/api/estilos/:id", removeEstilosById );
router.patch( "/api/estilos/:id", updateEstilosById );


// Exponer el router de este archivo para ser usado por otros en la aplicacion
export default router;