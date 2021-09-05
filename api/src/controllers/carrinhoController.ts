import { database } from '../database/connection';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import Carrinho from '../modules/carrinho';

class CarrinhoController {

    criarCarrinho(req: Request, res: Response) {
        const {nome} = req.body;
        console.log(nome);
        
        const token:any = req.headers.authorization;
        console.log(token);
        jwt.verify(token, 'cenorinha', async (err: any, decode: any) => {
            
            let carrinhos:any[] = await database('carrinho').where({ id_usuario: decode.id }).select('*');
            

            if (carrinhos.length < 15) {

                const carrinho = new Carrinho(nome,decode.id);
                    
                await database('carrinho').insert(carrinho);
                return res.status(200).send("Sucesso");
            }else{
                return res.status(401).send("Número máximo de carrinhos já atingido");
            }
        });

        

    }
    buscarCarrinhos(req: Request, res: Response) {
        const token:any = req.headers.authorization;
        console.log(token);
        console.log("buscou");

        jwt.verify(token, 'cenorinha', async (err: any, decode:any)=>{
            
            const carrinhos:Carrinho[] = await database('carrinho').where({id_usuario: decode.id}).select('*');
            return res.json(carrinhos);

        });

    }
    alteraCarrinho(req: Request, res: Response) {

    }

}


export default new CarrinhoController();