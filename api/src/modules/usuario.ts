import Carrinho from './carrinho'
export default class Usuario{
    nome: string;
    email: string;
    id: number | undefined;
    senha: string;
    

    constructor(nome:string,email:string,senha:string){
        this.nome = nome;
        this.email = email;
        this.senha = senha;

}
}