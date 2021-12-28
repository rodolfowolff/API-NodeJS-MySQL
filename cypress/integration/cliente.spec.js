const url = Cypress.config('baseUrl');

const payloadAddCliente = require('../payloads/cliente.payload.json');
const payloadErrorCliente = require('../payloads/cliente.Errorpayload.json');
const payloadCpfValidCliente = require('../payloads/cliente.CPFvalidpayload.json');
const payloadCepValidCliente = require('../payloads/cliente.CEPvalidpayload.json');

describe('Testes de integração de Cliente', function () {
  it('Deve inserir um novo cliente', function () {
    cy.request({
      method: 'POST',
      url: `${url}/cadastro`,
      body: payloadAddCliente,
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cliente cadastrado com sucesso!');
      cy.log(response.body);
    });
  });

  it('Deve inserir um novo cliente mesmo com cpf com (-) e (.)', function () {
    cy.request({
      method: 'POST',
      url: `${url}/cadastro`,
      body: payloadCpfValidCliente[0],
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cliente cadastrado com sucesso!');
      cy.log(response.body);
    });
  });

  it('Deve retornar um erro se tiver mais que 14 caracters no cpf', function () {
    cy.request({
      method: 'POST',
      url: `${url}/cadastro`,
      body: payloadCpfValidCliente[1],
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.errors[0].msg).to.eq('O número de caracterese do cpf deve estar entre 11 e 14');
      cy.log(response.body);
    });
  });

  it('Deve inserir um novo cliente mesmo com cep com (-) e (.)', function () {
    cy.request({
      method: 'POST',
      url: `${url}/cadastro`,
      body: payloadCepValidCliente[0],
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cliente cadastrado com sucesso!');
      cy.log(response.body);
    });
  });


  it('Deve retornar um erro se tiver mais que 10 caracters no cep', function () {
    cy.request({
      method: 'POST',
      url: `${url}/cadastro`,
      body: payloadCepValidCliente[1],
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.errors[0].msg).to.eq('O número de caracterese do cep deve estar entre 8 e 10');
      cy.log(response.body);
    });
  });

  it('Deve retornar um erro se tiver algum campo em branco', function () {
    cy.request({
      method: 'POST',
      url: `${url}/cadastro`,
      body: payloadErrorCliente,
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(400);
      cy.log(response.body);
    });
  });

  it('Deve retornar um cliente pelo cpf', function () {
    cy.request({
      method: 'GET',
      url: `${url}/20000000049`,
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.eq(201);
      cy.log(response.body);
    });
  }
  );

  it('Deve retornar erro de cpf não for cadastrado', function () {
    cy.request({
      method: 'GET',
      url: `${url}/99999999999`,
      failOnStatusCode: false
    }).should((response) => {
      expect(response.status).to.be.eq(404);
      expect(response.body.error).to.eq('Clinte não encontrado');
      cy.log(response.body);
    });
  }
  );
});
