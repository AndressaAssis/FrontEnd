# ✨ Loja Virtual - GRUPO 5 ✨

## Introdução 
Este projeto é uma loja virtual simples, composta por uma página inicial com uma *landing page*, uma página de vitrine de produtos, uma página de detalhes dos itens e um sistema de carrinho de compras. O foco é aplicar conceitos de HTML, CSS, JavaScript e responsividade para proporcionar uma experiência de usuário fluida e amigável.

## Índice 📄
- [Página Inicial](#página-inicial)
- [Vitrine](#vitrine)
- [Detalhes do Produto](#detalhes-do-produto)
- [Carrinho de Compras](#carrinho-de-compras)
- [Instalação](#instalação)
- [Uso](#uso)
- [Recursos](#recursos)
- [Dependências](#dependências)
- [Contribuidores](#contribuidores)
- [Licença](#licença)

## Página Inicial
A *landing page* apresenta o título da loja, uma imagem representativa e um botão centralizado para acessar a vitrine de produtos.

- **Título**: Escrito em minúsculas no HTML, mas estilizado via CSS para que a primeira letra apareça em maiúscula com um destaque (como uma cor diferente). O título também inclui sombra de texto.
- **Botão "Entrar na Loja"**: Centralizado na página, possui efeito de mudança visual ao passar o mouse, como alteração de cor ou bordas. Esse botão contém um **link** que redireciona para a página da Vitrine.

## Vitrine
A página da vitrine contém:
- **Barra de menu superior**: Fixa no topo da página, ocupando toda a largura, e responsiva.
  - Nome da loja alinhado à esquerda.
  - Links no centro para outras páginas (Sobre os Vendedores, Contato).
  - Ícone de login com uma imagem arredondada (via CSS) no lado direito.
- **Seção de Produtos**:
  - Os produtos estão dispostos em um contêiner com 3 colunas e 2 linhas (layout flexível, pode utilizar Bootstrap para os *cards*).
  - Cada produto inclui:
    - **Título**
    - **Imagem**: Preenche todo o espaço do card.
    - **Campo para quantidade** e um **botão de compra** que redireciona para a página de detalhes do produto.
  
## Detalhes do Produto
A página de detalhes recebe o identificador do produto (ID, título ou sequencial) através da URL, que será usado para recuperar as informações do item de um array de objetos.

- **Layout da página**:
  - Um contêiner com bordas arredondadas e um fundo com textura.
  - **Imagem do Produto**: A mesma da página anterior.
  - **Descrição do Produto**: Um pequeno texto descritivo.
  - **Botão "Adicionar ao Carrinho"**: Adiciona o item ao carrinho de compras.

## Carrinho de Compras
O carrinho de compras contém:
- Um ícone na barra de título com uma **badge** indicando o número de itens no carrinho.
- Os itens adicionados ao carrinho são armazenados no **LocalStorage** do navegador, mantendo o número de produtos persistente.
- Uma página adicional exibe uma tabela com os produtos no carrinho, permitindo visualizar e gerenciar os itens.

## Instalação  🔧
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/FrontEnd.git
    ```
2. Abra o arquivo principal.html no navegador.
   
## Uso 💥
- Acesse a landing page para navegar pela loja.
- Na página de Vitrine, explore os produtos e clique em "Comprar" para ver mais detalhes.
- Adicione produtos ao carrinho e visualize-os na página do Carrinho de Compras.

## Recursos
- Efeitos visuais: Inclui efeitos de transição no botão "Entrar na Loja" e sombras no título.
- Animações: Utilização de uma animação em CSS para algum elemento da página (ex: ícone de login ou carrinho).
- Responsividade: Layout adaptado para dispositivos móveis utilizando Flexbox e Bootstrap.

## Dependências 
* Bootstrap 5 (opcional para os cards de produtos)
* Fontes e ícones adicionais podem ser usados conforme necessário.

## Contribuidores 📌
@AndressaAssis
@HeytorPC
@rjanuzzi
@romulolourenço
@Teldison

## Licença ✔️
- Todo o projeto foi feito de forma acadêmica e para fins de conclusão do projeto final.
