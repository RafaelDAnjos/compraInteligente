import jwt from 'jsonwebtoken';
import {Request,Response} from 'express';
import {database} from '../database/connection'

class AuthorizathionController{



    async autorizar(req:Request,res:Response){
        const {email,senha} = req.body;
        const user = await (await database('usuario').where({email: email}).select('email','senha','id_usuario')).pop();
        console.log(user);
        if(user != null){
            if(senha == user.senha){
                let token = jwt.sign({id: user.id_usuario}, 'cenorinha');
                return res.json(token);
            }else{
                return res.status(401).send('senha incorreta');
            }

        }else{
            return res.status(401).send('email não cadastrado');
        }

    }
    
}

export default new AuthorizathionController();