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
routes.get('/buscarCarrinhos',carrinhoController.buscarCarrinhos);
routes.post('/deletarCarrinho',carrinhoController.deletarCarrinho);

//item Routes
routes.post('/criarItem',itemController.criaritem);
routes.post('/buscarItens',itemController.buscarItens);
routes.post('/deletarItemCarrinho',itemController.deletarItemCarrinho);

//compras Routes
routes.post('/criarCompra',compraController.criarCompra);
routes.get('/buscarCompras',compraController.buscarCompras);



export default routes;