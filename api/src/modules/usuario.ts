import Carrinho from './carrinho'
export default class Usuario{
    nome: string;
    email: string;
    id: number | undefined;
    senha: string;
    carrinhos: Carrinho[];

    constructor(nome:string,email:string,senha:string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.carrinhos = [];
    }


}