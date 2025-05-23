import express from 'express';
import {  crearParteSuperior } from '../controllers/parteSuperior.controller.mjs';
import { crearParteInferior } from '../controllers/parteInferior.controller.mjs';

const router = express.Router();

//Definir las rutsa para la entidad miArmario
// router.post('/api/miArmario',crearMiArmario);
router.post('/api/parteSuperior',crearParteSuperior );
router.post('/api/parteInferior',crearParteInferior);


export default router;

