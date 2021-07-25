import {Request, Response} from 'express';
import Compra from '../modules/compra';
import jwt from 'jsonwebtoken';
import { database } from '../database/connection';
import Item from '../modules/item';

class CompraController{

    async criarCompra(req:Request,res:Response){
        const{token,data,itens} = req.body;

        jwt.verify(token,'cenorinha',async (err:any,decode:any) => {

            itens.forEach(async (item:Item)=>{

                await database('compra').insert({
                    data: data,
                    id_usuario: decode.id,
                    id_item: item.id
                });
                
            });
        });

    }
    async buscarCompras(req:Request,res:Response){
        const {token} =req.body;
        let compras:Compra[];
        jwt.verify(token,'cenorinha',async (err:any,decode:any)=>{
            compras = await database('compras').where({id_usuario:decode.id}).select('*');
            
            return res.json(compras);
        });

    }


}

export default new CompraController();