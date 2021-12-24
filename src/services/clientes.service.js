/* eslint-disable no-unused-vars */
const { Cliente } = require('../database/models');

class Service {
  // eslint-disable-next-line class-methods-use-this
  async clienteRegister({ nome, cpf, email, cep, dataNascimento }) {
    const [clienteOk] = await Cliente.findOrCreate({
      where: { cpf },
      defaults: {
        nome,
        email,
        cep,
        dataNascimento,
      },
    });

    return clienteOk;
  }
}

const ClienteService = new Service();

module.exports = ClienteService;
