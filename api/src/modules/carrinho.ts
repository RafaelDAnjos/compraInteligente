import Item from './item'
export default class Carrinho{
    nome:string;
    id_carrinho:number | undefined;
    id_usuario:number;
    itens: Item[];
    constructor(nome:string,id_usuario:number){

        this.nome = nome;
        this.itens = [];
        this.id_usuario = id_usuario;

    }
    
}