# DevBurguer Interface

## Apresentação

Este projeto é uma interface web para o sistema DevBurguer, desenvolvido por Gabriel Mendes. O objetivo é proporcionar uma experiência completa para clientes e administradores de uma hamburgueria digital, com foco em usabilidade, performance e integração com pagamentos online.

## Funcionalidades

- Catálogo de Produtos: Visualização de produtos, ofertas e categorias.
- Carrinho de Compras: Adição, remoção e resumo de itens.
- Checkout: Integração com Stripe para pagamentos.
- Administração: Cadastro, edição e remoção de produtos, gerenciamento de pedidos e controle de status.
- Autenticação: Login e registro de usuários.
- Pedidos: Visualização de pedidos, atualização de status e histórico.
- Interface Responsiva: Adaptada para desktop e mobile.
- Notificações: Feedback ao usuário via Toast.
- Carrossel de Ofertas e Categorias: Navegação dinâmica.
- Layouts Separados: Área do usuário e área administrativa.

## Estrutura do Projeto

- React (SPA)
- Vite (build e dev server)
- Styled Components e Emotion (estilização)
- MUI (componentes visuais)
- React Router Dom (roteamento)
- Axios (requisições HTTP)
- React Hook Form e Yup (formulários e validação)
- Stripe (pagamentos)
- PropTypes (tipagem)
- React Toastify (notificações)
- ESLint e Prettier (boas práticas e padronização)

## Ferramentas e Tecnologias

- @mui/material: Componentes visuais modernos.
- @phosphor-icons/react: Ícones customizados.
- react-multi-carousel: Carrossel de produtos e categorias.
- styled-components: CSS-in-JS para temas e estilos globais.
- @emotion/react: Alternativa para estilização.
- Stripe: Checkout seguro e integração de pagamentos.
- React Hook Form & Yup: Formulários robustos e validação.
- React Toastify: Notificações elegantes.
- ESLint, Prettier, Biome: Qualidade de código.

## Estrutura de Pastas

- src/components: Componentes reutilizáveis (Button, CardProduct, CartButton, etc.)
- src/containers: Páginas e fluxos principais (Home, Menu, Cart, Checkout, Admin, etc.)
- src/hooks: Contextos e hooks customizados (UserContext, CartContext)
- src/layouts: Layouts para áreas distintas (AdminLayout, UserLayout)
- src/routes: Definição das rotas da aplicação
- src/services: Integração com API
- src/styles: Estilos globais e temas
- src/utils: Funções utilitárias (formatDate, formatPrice)

## Diferenciais

- Código limpo, modular e organizado.
- Pronto para deploy e integração com backend.
- Foco em acessibilidade e responsividade.
- Padronização de estilos e tipagem.
- Estrutura preparada para expansão de funcionalidades.

## Desenvolvedor

Projeto desenvolvido por **Gabriel Mendes**.
