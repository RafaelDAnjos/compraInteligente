import {Router,Request,Response} from 'express';
import usuarioController from '../controllers/usuarioController';
import autorizationController from '../controllers/authorizathionController';

const routes = Router();
//userRoutes
routes.get('/usuarios',usuarioController.listarUsuarios);
routes.post('/criarUsuario',usuarioController.criarUsuario);

//authorization Routes
routes.post('/autorizar',autorizationController.autorizar);


export default routes;