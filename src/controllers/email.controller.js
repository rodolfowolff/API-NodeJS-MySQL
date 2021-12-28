const { validationResult } = require('express-validator');
const ClienteService = require('../services/clientes.service');
const mailUtil = require('../utils/mail');

class Controller {
  enviarEmail = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { cpf, mensagem } = req.body;

      const result = await ClienteService.getByCpf({ cpf });

      if (result !== null) {
        await mailUtil.enviarEmail(result.email, mensagem);

        res.status(201).json({ message: `Email enviado para ${result.email} com sucesso!` });
      }

    } catch (error) {
      res.status(404).json({ error: 'Erro ao enviar email, cpf informado não registrado' });
    }
  };
}

const ClienteController = new Controller();

module.exports = ClienteController;
