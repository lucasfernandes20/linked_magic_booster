# Linked Magic Booster Simulator

Esta aplicação foi desenvolvida como parte de um processo seletivo para a empresa "Linked". Trata-se de um site que simula a abertura de boosters (pacotes) de cartas de Magic: The Gathering, implementado em Angular.

## Funcionalidades

-   **Filtro de Coleções:** A tela principal permite ao usuário filtrar coleções de cartas por nome da coleção ou pelo bloco ao qual pertencem.
-   **Simulação de Abertura de Booster:** Ao clicar em uma coleção, o usuário é redirecionado para a tela de abertura de booster, onde pode simular a abertura de um booster, gerando 15 cartas aleatórias do tipo criatura.

## Estrutura do Projeto

A organização do projeto segue a seguinte estrutura de pastas:

-   **pages:** Contém os módulos que correspondem às páginas da aplicação.
-   **components:** Contém componentes reutilizáveis que podem ser usados em diferentes partes da aplicação.
-   **modules:** Agrupa conjuntos de componentes que formam uma funcionalidade específica.
-   **services:** Contém serviços que lidam com chamadas à API e outras funcionalidades relacionadas a dados.

## Instruções de Uso

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/lucasfernandes20/linked_magic_booster
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd linked_magic_booster
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

### Execução

Para iniciar a aplicação em ambiente de desenvolvimento, execute:

```bash
npm run start
```

### Deploy

A aplicação estará disponível (Deploy) [aqui](https://linked-magic-booster.vercel.app/).

### Navegação

-   **Página Principal:** Aqui, o usuário pode filtrar coleções por nome ou bloco.
-   **Abertura de Booster:** Após selecionar uma coleção, o usuário é redirecionado para onde pode simular a abertura do booster e visualizar as 15 cartas de criatura geradas aleatoriamente.

## Tecnologias Utilizadas

-   **Angular:** Framework principal para o desenvolvimento da aplicação.
-   **HTML:** Marcação das páginas.
-   **Tailwind:** Estilização da aplicação.
-   **TypesScript:** Linguagem de programação.
-   **API de Cartas de Magic:** Utilizada para obter dados das cartas.

## Estrutura de Código

### pages/

-   **home:** Contém a lógica e a interface para a página principal de filtro de coleções.
-   **booster** Contém a lógica e a interface para a simulação de abertura de booster.

### components/

-   **card/:** Componente reutilizável para exibição de cartas de Magic.
-   **filter/:** Componente para o filtro de coleções.

### modules/

-   **collection-filters:** Módulo que agrupa componentes relacionados ao filtro de coleções.
-   **header/:** Módulo que agrupa componentes relacionados ao header da aplicação.

### services/

-   **magicService:** Serviço para chamadas à API de cartas de Magic e manipulação de dados de cartas.
-   **cardColorService** Serviço para manipulaçao de código de cores das cartas para cores interpretáveis.

## Considerações Finais

Gostaria de acrescentar que, no momento, o Angular é o framework com o qual tenho menos familiaridade. No entanto, estou comprometido em aprimorar minhas habilidades e conhecimentos nesse framework. Com mais estudo e dedicação voltados especificamente para o Angular, estou confiante de que conseguirei entregar resultados ainda melhores em futuros projetos.

## Recomendações para Futuras Implementações

Gostaria de aproveitar esta oportunidade para recomendar à empresa "Linked" a considerar a troca da API utilizada neste processo para futuros candidatos. A API atual, [Magic: The Gathering API](https://docs.magicthegathering.io), está um pouco defasada. Os dados fornecidos não são devidamente tipados e nem todos os endpoints são funcionais, o que pode gerar dificuldades e frustrações para desenvolvedores.

Pessoalmente, recomendo a adoção da API da [ScryFall](https://scryfall.com/docs/api). Além de ser gratuita, a API da ScryFall é mais rápida, frequentemente atualizada e fornece dados de maneira mais concisa e bem estruturada. Essa mudança não só facilitará o desenvolvimento de futuras aplicações como também proporcionará uma experiência mais agradável e eficiente para os candidatos que participarem dos processos seletivos.

Espero que este conselho seja absorvido convenientemente e seja de ajuda para aprimorar os processos e ferramentas utilizadas pela "Linked".

---

Desenvolvido por [Lucas Fernandes](https://linkedin.com/in/lucasfernandesreis).

```

```
