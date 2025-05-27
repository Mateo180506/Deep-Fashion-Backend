import express from 'express';
import {  crearParteSuperior } from '../controllers/parteSuperior.controller.mjs';
import { crearParteInferior, getAllParteInferior, getParteInferiorById } from '../controllers/parteInferior.controller.mjs';

const router = express.Router();

//Definir las rutsa para la entidad miArmario
// router.post('/api/miArmario',crearMiArmario);
router.post('/api/parteSuperior',crearParteSuperior );


router.post('/api/parteInferior',crearParteInferior);
router.get('/api/parteInferior', getAllParteInferior);
router.get('/api/parteInferior/:id', getParteInferiorById);  //:id = Parametrizar la ruta: Creamos una especie de variable


export default router;

