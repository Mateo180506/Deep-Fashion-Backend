//File routes: Definir los endpoinsts de uan entidad
import{Router}from "express";  //Importando el Router de Express
import { crearMiArmario, eliminarMiArmario } from "../controllers/miArmario.controller.mjs";
const router=Router();        //Invocando router (Preparandolo para definir rutas)

//Define las rutas de acceso 
router.get("/api/miArmario" , (req,res) => {
    res.send("Obtiene todos los productos")
})
router.post("/api/miArmario" , crearMiArmario);

router.patch("/api/miArmario" , (req,res) => {
    res.send("Actualizacion parcial de un producto")
})
router.put("/api/miArmario" , (req,res) => {
    res.send("Actualizacion total de un producto")
})
router.delete("/api/miArmario" , eliminarMiArmario);

export default router;       //Exportar todas las rutas de esta entidad para ser usadas en cualquier parte de la aplicacion