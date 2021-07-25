import Item from './item'
export default class Compra{
    data:Date;
    id_usuario:number;
    id_compra:number | undefined;
    itens:Item[];

    constructor(data:Date, id_usuario:number, itens: Item[]){

        this.data = data;
        this.itens = itens;
        this.id_usuario = id_usuario;

    }

}