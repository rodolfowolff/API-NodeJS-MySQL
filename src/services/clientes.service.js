const { Cliente } = require('../database/models');

class Service {
  clienteRegister = async ({ nome, cpf, email, cep, dataNascimento }) => {
    const [clienteRegister] = await Cliente.findOrCreate({
      where: { cpf },
      defaults: {
        nome,
        email,
        cep,
        dataNascimento,
      },
    });

    return clienteRegister;
  };
}

const ClienteService = new Service();

module.exports = ClienteService;
