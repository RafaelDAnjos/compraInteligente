# compraInteligente
Sistema Compra inteligente para a disciplina de desenvolvimento Web, onde um usuario cadastra até 15 Carrinhos(listas de compra), cada lista de compras pode ter inumeros itens, cada usuario tem permissão para criar itens.

## Definição de Escopo
A fim de criar uma aplicação de ponta a ponta com um banco de dados foi reduzido o escopo do projeto Original.
No projeto Original o carrinho de cada pessoa pode ser compartilhado com outros usuarios do sistema, e através do relatório de compras do cliente, o aplicativo daria sugestões do que o cliente poderia vir a precisar em um futuro próximo.

## Front-end
O front-end foi desenvolvido utilizando Ionic 5 juntamente com o framework Angular, em typescript, pela facilidade que o Ionic 5 tem de configurar as rotas do front-end, criar as páginas, e integrar o back-end com o front-end a partir dos componentes `Service`.

## Back-end
O back-end foi feito com nodeJS e typescript, e a conexão com o banco de dados foi feito através do framework Knex, que além de facilitar a conexão com o banco de dados, facilita também a injeção de sql no código.

## Banco de dados
O banco de dados escolhido foi o postgresql, e uma instância foi upada no ElephantSql, a escolha do Elephant, foi por conta de ser um banco gratuito na nuvem, logo, qualquer um conseguiria testar facilmente de qualquer lugar.
### Modelo Conceitual
![alt text](https://github.com/RafaelDAnjos/compraInteligente/blob/master/imagens/ModeloFisico.jpg)
### Modelo Lógico
![alt text](https://github.com/RafaelDAnjos/compraInteligente/blob/master/imagens/ModeloLogico.jpg)


