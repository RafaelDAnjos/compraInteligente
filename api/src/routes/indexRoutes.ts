import {Router,Request,Response} from 'express';
import usuarioController from '../controllers/usuarioController';
import autorizationController from '../controllers/authorizathionController';
import carrinhoController from '../controllers/carrinhoController';

const routes = Router();
//userRoutes
routes.get('/usuarios',usuarioController.listarUsuarios);
routes.post('/criarUsuario',usuarioController.criarUsuario);

//authorization Routes
routes.post('/autorizar',autorizationController.autorizar);

//carrinho Routes
routes.post('/criarCarrinho',carrinhoController.criarCarrinho);
routes.post('/buscarCarrinhos',carrinhoController.buscarCarrinhos);


export default routes;