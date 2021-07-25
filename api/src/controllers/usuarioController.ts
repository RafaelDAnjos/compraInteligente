import Usuario from '../modules/usuario'
import {database} from '../database/connection';
import {Request,Response} from 'express';

class UsuarioController{

    async criarUsuario(req:Request,res:Response){
        
        let usuario  = new Usuario(req.body.nome,req.body.email,req.body.senha);
        
        const userEmail = await (await database('usuario').where({email: usuario.email}).select('email')).pop();
        
        if(userEmail!=null){
            return res.status(401).send("Email já existente");
        }else{
            
            await database('usuario').insert(usuario);
            return res.status(201).send();
        }
    }
    async deletarUsuario(){

    }
    async alterarUsuario(){

    }
    async listarUsuarios(req:Request,res:Response){
        
        const usuarios:Usuario[] = await database('usuario').select('*');        
        return res.json(usuarios);
    }

    
}

export default new UsuarioController();