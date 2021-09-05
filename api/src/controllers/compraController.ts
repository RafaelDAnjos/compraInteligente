import {Request, Response} from 'express';
import Compra from '../modules/compra';
import jwt from 'jsonwebtoken';
import { database } from '../database/connection';
import Item from '../modules/item';

class CompraController{

    async criarCompra(req:Request,res:Response){
        console.log(req.body);
        let itens = req.body.itens;
        let id_usuario = req.body.id_usuario;
        let data = new Date();
        
        console.log(itens);
        console.log(id_usuario);
        console.log(data);
        for(let i = 0; i< itens.length;i++){
            
            let compra = {
                id_usuario:id_usuario,
                data:data,
                id_item: itens[i].id_item
            }
            await database('compra').insert(compra);
        }

        return res.status(201).send();
        
}
    async buscarCompras(req:Request,res:Response){
        const token:any = req.headers.authorization;
        console.log(token);
        jwt.verify(token,'cenorinha',async (err:any,decode:any)=>{
            let compras_parc:any[] = await database('compra').where({id_usuario:decode.id}).select('*');
            let compras:any[] = []
            for(let i=0;i<compras_parc.length;i++){
                let nome_item = await database('item').select('nome').where({id_item:compras_parc[i].id_item});
                let compra = {
                    nome_item: nome_item[0].nome,
                    data: compras_parc[i].data
                }
                compras.push(compra);

            }
            console.log(compras)
            return res.json(compras);
        });

    }


}

export default new CompraController();