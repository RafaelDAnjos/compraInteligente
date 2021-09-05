import Item from './item'
export default class Compra{
    data:Date;
    id_usuario:number;
    id_compra:number | undefined;
    

    constructor(data:Date, id_usuario:number){

        this.data = data;
       
        this.id_usuario = id_usuario;

    }

}