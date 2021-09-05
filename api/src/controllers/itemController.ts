import {database} from '../database/connection';
import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import Item from '../modules/item';
import Carrinho from '../modules/carrinho';

class itemController{

    async criaritem(req:Request, res:Response){
        const {nome,id_carrinho} = req.body;
        let item = {
            nome: nome
        }
        let itens:any[] = await database('item').where({nome: item.nome}).select('*');
        console.log(itens);
        if(itens.length == 0){
            console.log('ta entrando aqui');
            await database('item').insert(item);
            let item_com_id:any = await (await database('item').where({nome:item.nome}).select('*')).pop();
            console.log(item_com_id);
            let carrinho_item = {
                id_carrinho: id_carrinho,
                id_item: item_com_id.id_item
            }

            await database('carrinho_item').insert(carrinho_item);

            return res.status(200).send();
        }else{
            let item_com_id:any = await (await database('item').where({nome:item.nome}).select('*')).pop();
            console.log(item_com_id);
            let carrinho_item = {
                id_carrinho: id_carrinho,
                id_item: item_com_id.id_item
            }

            await database('carrinho_item').insert(carrinho_item);

            return res.status(200).send();
        }

    }

    

    async buscarItens(req:Request,res:Response){
        const {id_carrinho} = req.body;
        let itens_carrinho:any[] =  await database('carrinho_item').where({id_carrinho:id_carrinho}).select('*');
        
        let itens:any[] = []
        for(let i = 0; i<itens_carrinho.length;i++){
            let item = await (await database('item').where({id_item:itens_carrinho[i].id_item}).select('*')).pop();
            itens.push(item);
        }
        let json = {
            itens: itens
        }
        
        return res.json(json);
    }

    async deletarItemCarrinho(req:Request, res:Response){
        const{nome,id_item,id_carrinho} = req.body;
        console.log(nome);
        let itens_carrinho:any[] = await database('carrinho_item').select('*').where({id_item:id_item,id_carrinho:id_carrinho});
        console.log(itens_carrinho);
        await database('carrinho_item').delete().where({id_item:id_item,id_carrinho:id_carrinho});

        for(let i=0;i<itens_carrinho.length-1;i++){
            console.log(itens_carrinho[i]);
            await database('carrinho_item').insert(itens_carrinho[i]);
        }
        

        return res.status(200).send();


    }





}


export default new itemController();