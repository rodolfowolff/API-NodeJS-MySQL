<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h2 align="center">Desafio desenvolvedor back-end</h2>

  <p align="center">
    Implementar uma API nodeJS para cadastrar clientes em um banco de dados mysql.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Tabela de conteúdos</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
      </ul>
    </li>
    <ul>
        <li><a href="#regras-de-negócio">Regras de negócio</a></li>
      </ul>
    </li>
    <li>
      <a href="#instruções-gerais">Instruções gerais</a>
      <ul>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <ul>
        <li><a href="#configurando">Configuração</a></li>
      </ul>
    </li>
    <li><a href="#utilizando-a-api">Utilizando a API</a></li>
      <ul>
        <li><a href="#endpoints">Endpoints</a></li>
      </ul>
        <ul>
        <li><a href="#swagger">Swagger</a></li>
      </ul>
    </li>
    </li>  
    <li><a href="#test">Testes</a></li>
    <li><a href="#desenvolvedor">Desenvolvedor</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## :notebook_with_decorative_cover: Sobre o projeto

Esse projeto tem como objetivo o desenvolvimento de uma API para cadastrar clientes, consultar cliente e enviar email para o mesmo.

### Tecnologias Utilizadas

O projeto foi criado usando as tecnologias:

- [JavaScript] 
- [Node.Js]
- [MySQL]
- [Swagger]
- [Cypress]

### Regras de Negócio

- Cada cliente deve ter um cpf cadastrado;
- O cpf do cliente pode ser enviar com <i>(-)</i> e ou <i>(.)</i>;
- O cep do cliente pode ser enviar com <i>(-)</i> e ou <i>(.)</i>;
- Ao enviar as informações de cadastro automaticamente ira buscar os dados <i>(rua, bairro, cidade, estado)</i>conforme o cep informado;
- Se registro do cliente for válido, pode ser enviado um email informando o CPF e a mensagem;

<!-- GETTING STARTED -->

## :book: Instruções Gerais

A seguir estão as instruções para a instalação, configuração e uso da API do projeto.

### Instalando

1. Clonar o repositório

```sh
   git clone https://github.com/rodolfowolff/API-NodeJS-MySQL
```

2. Instalando os pacotes

```sh
    npm install
```

3. Rodar migrations

```sh
    npm run migrate
```

-OU-

```sh
    npx sequelize db:migrate
```

5. Executar o Swagger

```sh
    npm run swagger
```

-OU-

```sh
    node src/swagger.js
```

6. Executar a API localmente

```sh
    npm run dev
```

### Configurando

1. Criar um arquivo na raiz do projeto, chamado [.env].

2. Copiar o conteúdo do arquivo [.env.example] e setar com as configurações do seu banco de dados e a URL da aplicação.


<!-- USAGE EXAMPLES -->

## :electric_plug: Utilizando a API

### Endpoints

- Buscar cliente por CPF
- Cadastro de cliente
- Enviar email para cliente

![Endpoints Clientes][endpoints-cliente]

### Rodando aplicação localmente com Swagger

No navegador, digitar <a href="localhost:3000/docs">localhost:3000/docs</a>. Se necessário, trocar 3000 pela porta configurada.


<!-- TEST -->

## :bug: Testes
Os testes automatizados da aplicação foram desenvolvidos com o framework Cypress 

1. Executar os testes

```sh
    npm run test
```
![cypress][cypress]

<br>

<!-- CONTACT -->

##  🐺 👨‍💻 Desenvolvedor

- [Rodolfo Wolff](https://github.com/rodolfowolff)

<!-- MARKDOWN LINKS & IMAGES -->

[endpoints-cliente]: images/cliente.png
[cypress]: images/testes.png
