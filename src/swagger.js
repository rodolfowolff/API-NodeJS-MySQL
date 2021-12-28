const swaggerAutogen = require("swagger-autogen")();
require('dotenv').config();

const URL_APLICACAO = 'http://localhost:3000';

const outputFile = "./src/swagger_output.json";
const endpointFiles = ["./src/index.js"];
const doc = {
  info: {
    version: "1.0.0",
    title: "Teste Clube gazetadopovo API - Rodolfo Wolff",
    description:
      "Vaga desenvolvedor back-end | Teste. Desenvolvimento de uma API nodeJS para cadastrar clientes em um banco de dados mysql.",
  },
  host: URL_APLICACAO,
  basePath: "/",
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Clientes",
      description: "Endpoints relacionados ao recurso de usuário",
    },
  ],
  definitions: {
    ClienteCpf: {
      cpf: "455.512.481-00",
    },
    NovoCliente: {
      $nome: "Maria",
      $cpf: "123.456.789-00",
      $email: "12345",
      $cep: "82.840-270",
      $dataNascimento: "2014-01-01"
    },
  },
};

swaggerAutogen(outputFile, endpointFiles, doc);