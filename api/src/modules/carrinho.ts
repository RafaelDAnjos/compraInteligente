import Item from './item'
export default class Carrinho{
    nome:string;
    id_carrinho:number | undefined;
    id_usuario:number;
    
    constructor(nome:string,id_usuario:number){

        this.nome = nome;
        this.id_usuario = id_usuario;

    }
    
}