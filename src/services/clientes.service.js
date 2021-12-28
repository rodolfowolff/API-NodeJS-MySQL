const { Cliente } = require('../database/models');

class Service {
  getByCpf = async ({ cpf }) => {
    const result = await Cliente.findOne({
      where: { cpf },
    });
    if (!result) {
      throw new Error('Cliente não encontrado');
    }

    return result;
  };

  clienteRegister = async ({ nome, cpf, email, cep, dataNascimento }) => {
    const findByCpf = await this.getByCpf({ cpf });

    if (findByCpf) {
      throw new Error('Cliente já cadastrado!');
    }

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
