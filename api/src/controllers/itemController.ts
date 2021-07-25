import {database} from '../database/connection';
import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import Item from '../modules/item';
import Carrinho from '../modules/carrinho';

class itemController{

    async criaritem(req:Request, res:Response){
        const {nome,id_carrinho} = req.body;

        const itens:Item[] = await database('item').where({nome:nome}).select('*');
        
        if(itens == null){
            await database('item').insert({
                nome:nome
            });
            let item_com_id:Item = await (await database('item').where({nome:nome}).select('*')).pop();
            this.addItemCarrinho(item_com_id,id_carrinho);
        }else{

            let item_com_id:Item = await (await database('item').where({nome:nome}).select('*')).pop();
            this.addItemCarrinho(item_com_id,id_carrinho);
        }

        return res.status(201).send();

    }

    async addItemCarrinho(item:Item, id_carrinho:number){
        let item_carrinho = {
            id_carrinho: id_carrinho,
            id_item: item.id
        }
        await database('carrinho_item').insert(item_carrinho);
    }

    async buscarItens(req:Request,res:Response){
        const {id_carrinho} = req.body;
        let itens_carrinho:Carrinho[] =  await database('carrinho_item').where({id_carrinho:id_carrinho}).select('*');

        return res.json(itens_carrinho);
    }





}


export default new itemController();