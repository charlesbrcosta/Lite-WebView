# Lite WebView - Visualização Front-end Simplificada

O Lite WebView é um projeto desenvolvido para atender uma necessidade minha facilitando a estilização de páginas web sem a exigência de uma segunda tela física. Com ele, é possível visualizar o projeto como um todo em uma tela menor, o que evita interrupções durante o processo de codificação, já que a janela permanece sobreposta a outras aplicações. Essa funcionalidade torna o desenvolvimento mais eficiente e intuitivo, permitindo um foco maior na criação e estilização da página.

## Finalidade

A finalidade principal do Lite WebView é fornecer uma maneira simples e eficiente para os desenvolvedores acompanharem o progresso de seus projetos front-end em uma visualização que simula a resolução de um computador convencional, sem precisar ficar trocando de tela.

## :dizzy: Tecnologias utilizadas

<div>
  <img src="https://img.shields.io/badge/HTML5-e34c26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/ELECTRON-363636?style=for-the-badge&logo=electron&logoColor=00FFFF">
</div>


## :warning: Requisitos

Para utilizar o Lite WebView, é necessário ter o seguinte instalado em sua máquina:

[Node.js](https://nodejs.org/en/download): O Node.js é um ambiente de execução JavaScript que permite executar aplicativos JavaScript no servidor.

## :dvd: Como instalar o Node.js

Para instalar o Node.js, siga os passos abaixo:

1.Windows:

- Baixe o instalador do Node.js no site oficial: [Node.js](https://nodejs.org/en/download)
- Execute o instalador e siga as instruções na tela.

2.MacOS:

- Você pode instalar o Node.js utilizando o Homebrew. Abra o terminal e execute o seguinte comando:

    ```bash
    brew install node

3.Linux:

- No Ubuntu ou Debian, você pode instalar o Node.js através do apt:

    ```bash
    sudo apt update
    sudo apt install nodejs npm


## Como funciona

O projeto utiliza a tecnologia Electron para criar o Lite WebView que carrega a página web do projeto em uma janela separada. A janela do Lite WebView pode ser ajustada em tamanho e escala para se adequar às necessidades do desenvolvedor, e ela fica sempre visível, evitando a necessidade de alternar entre telas durante o desenvolvimento.

## :open_file_folder: Como usar

1.Como baixar o projeto: 

- Clone o repositório do Lite WebView em sua máquina local.

    ```bash
    git clone https://github.com/charlesbrcosta/Lite-WebView.git
    cd Lite-Web-View

- Instale as dependências:

    ```bash
    npm install

- Execute o Lite WebView

    ```bash
    npm start

2.Configuração:

- Renomeie o arquivo .env.example para .env. Após esta etapa, o arquivo .env seguirá as configurações padrão do Lite WebView.

- As configurações do Lite WebView incluem largura e altura da janela, sobreposição da janela e zoom do conteúdo. A única configuração que você precisa definir é a URL do seu projeto. Fique à vontade para ajustar as configurações conforme necessário ou deixá-las no padrão.

    ```bash
    LT_WIDTH=800 
    LT_HEIGHT=600 
    LT_ALWAYSONTOP=true 
    LT_SETZOOMFACTOR=0.4
    LT_LOAD_URL_PORT=http://localhost:3000/   

## :paperclip: Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para a sua contribuição (git checkout -b feature/nova-funcionalidade).
3. Faça as alterações necessárias e commit (git commit -am 'Adicionando nova funcionalidade').
4. Push para a branch (git push origin feature/nova-funcionalidade).
5. Crie um novo Pull Request.

## :student: Autor

[<img loading="lazy" src="https://avatars.githubusercontent.com/u/48035699?v=4" width=115><br><sub>Charles Bruno</sub>](https://github.com/charlesbrcosta)


## :page_facing_up: Licença

Este projeto está licenciado sob a [Licença MIT](https://www.mit.edu/~amini/LICENSE.md).