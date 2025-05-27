import express from 'express';//importar la dependencia
import { createuser, getallusers, getuserbyId } from '../controllers/user.controller.mjs';
const router = express.Router();//importar el router de express

//definir rutas para entidad producto
router.post('/api/users',createuser);
router.get('/api/users',getallusers);
router.get('/api/users/:id',getuserbyId);

//exponer el router de este archivo para ser usado por otors en la aplicacion
export default router;