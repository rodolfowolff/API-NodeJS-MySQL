const { validationResult } = require('express-validator');
const ClienteService = require('../services/clientes.service');

class Controller {
  // eslint-disable-next-line class-methods-use-this
  async register(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { nome, cpf, email, cep, dataNascimento } = req.body;
      // eslint-disable-next-line max-len
      const clienteOk = await ClienteService.clienteRegister({ nome, cpf, email, cep, dataNascimento });

      if (clienteOk) {
        res.status(201).json({ message: 'Cliente cadastrado com sucesso!' });
      }
      res.status(200).json({ message: 'Erro, cpf já está em uso!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

const ClienteController = new Controller();

module.exports = ClienteController;
