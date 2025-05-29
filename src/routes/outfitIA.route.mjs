import express from 'express';//importar la dependencia
import { createOutfitIA,getAllOutfitIA,getOutfitIAById,deleteOutfitIAById } from '../controllers/outfitIA.controller.mjs';
const router = express.Router();//importar el router de express
//Define las rutas de acceso 
router.post('/api/outfitIA',createOutfitIA);
router.get('/api/outfitIA',getAllOutfitIA);
router.get('/api/outfitIA/:id',getOutfitIAById);
router.delete('/api/outfitIA/:id',deleteOutfitIAById);
export default router;       //Exportar todas las rutas de esta entidad para ser usadas en cualquier parte de la aplicacion