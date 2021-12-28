const { Cliente } = require('../database/models');

class Service {
  getByCpf = async ({ cpf }) => {
    const result = await Cliente.findOne({
      where: { cpf },
    });
    if (result === null) {
      throw new Error('Cliente não encontrado');
    }

    return result;
  };

  clienteRegister = async ({
    nome, cpf, email, cep, logradouro, bairro, localidade, uf, dataNascimento }) => {

    const findByCpf = await Cliente.findOne({
      where: { cpf },
    });

    if (findByCpf) {
      throw new Error('Cliente já cadastrado!');
    } else {
      const [clienteRegister] = await Cliente.findOrCreate({
        where: { cpf },
        defaults: {
          nome, email, cep, logradouro, bairro, cidade: localidade, estado: uf, dataNascimento,
        },
      });

      return clienteRegister;
    }
  };
}

const ClienteService = new Service();

module.exports = ClienteService;
