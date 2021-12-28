const { validationResult } = require('express-validator');
const ClienteService = require('../services/clientes.service');
const validarCep = require('../utils/viaCep');
const regexReplace = require('../utils/regex');

class Controller {
  getByCpf = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { cpf } = req.params;
      const replaceCpf = regexReplace(cpf);

      const result = await ClienteService.getByCpf({ cpf: replaceCpf });
      res.status(201).json(result);
    } catch (error) {
      res.status(404).json({ error: 'Clinte não encontrado' });
    }
  };

  register = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { nome, cpf, email, cep, dataNascimento } = req.body;
      const cepFormatado = regexReplace(cep);
      const { logradouro, bairro, localidade, uf } = await validarCep(cepFormatado);

      const replaceCpf = regexReplace(cpf);

      await ClienteService.clienteRegister({
        nome, cpf: replaceCpf, email, cep: cepFormatado, logradouro, bairro, localidade, uf, dataNascimento,
      });

      res.status(201).json({ message: 'Cliente cadastrado com sucesso!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

const ClienteController = new Controller();

module.exports = ClienteController;
