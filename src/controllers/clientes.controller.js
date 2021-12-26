const { validationResult } = require('express-validator');
const ClienteService = require('../services/clientes.service');

class Controller {
  register = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { nome, cpf, email, cep, dataNascimento } = req.body;
      const clienteRegister = await ClienteService
        .clienteRegister({ nome, cpf, email, cep, dataNascimento });

      if (clienteRegister) {
        res.status(201).json({ message: 'Cliente cadastrado com sucesso!' });
      } else {
        res.status(400).json({ message: 'Cliente já cadastrado!' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}

const ClienteController = new Controller();

module.exports = ClienteController;
