import {Router,Request,Response} from 'express';
import usuarioController from '../controllers/usuarioController';
import autorizationController from '../controllers/authorizathionController';
import carrinhoController from '../controllers/carrinhoController';
import itemController from '../controllers/itemController';
import compraController from '../controllers/compraController';

const routes = Router();
//userRoutes
routes.get('/usuarios',usuarioController.listarUsuarios);
routes.post('/criarUsuario',usuarioController.criarUsuario);

//authorization Routes
routes.post('/autorizar',autorizationController.autorizar);

//carrinho Routes
routes.post('/criarCarrinho',carrinhoController.criarCarrinho);
routes.post('/buscarCarrinhos',carrinhoController.buscarCarrinhos);

//item Routes
routes.post('/criarItem',itemController.criaritem);
routes.post('/buscarItens',itemController.buscarItens);

//compras Routes
routes.post('/criarCompras',compraController.criarCompra);
routes.post('/buscarCompras',compraController.buscarCompras);



export default routes;