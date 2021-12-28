const url = Cypress.config('baseUrl');

const payloadAddCliente = require('../payloads/cliente.payload.json');
const payloadErrorCliente = require('../payloads/cliente.Errorpayload.json');

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

  it('Deve retornar erro se cpf não for cadastrado', function () {
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
