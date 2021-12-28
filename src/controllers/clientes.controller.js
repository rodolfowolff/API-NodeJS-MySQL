const { validationResult } = require('express-validator');
const ClienteService = require('../services/clientes.service');
const validarCep = require('../utils/viaCep');
const regexReplace = require('../utils/regex');

class Controller {
  getByCpf = async (req, res) => {
    /*
    #swagger.tags = [ "Clientes" ]
    #swagger.description = "Endpoint para retornar dados de um cliente",
    #swagger.parameters['getByCpf'] = {
      in: 'body',
      description: 'Informações para retornar dados do cliente',
      required: true,
      type: 'string',
      schema: { $ref: '#/definitions/ClienteCpf'}
      }
    #swagger.responses[201] = {
      description: 'Retorna dados do cliente com sucesso'
    }
    #swagger.responses[404] = {
      description: 'Clinte não encontrado'
    }
    */
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
    /*
    #swagger.tags = [ "Clientes" ]
    #swagger.description = "Endpoint para cadastro de cliente",
    #swagger.parameters['Cadastro'] = {
      in: 'body',
      description: 'Informações para realização do cadastro',
      required: true,
      type: 'object',
      schema: { $ref: '#/definitions/NovoCliente'}
      }
    #swagger.responses[200] = {
      description: 'E-mail já possui cadastro no banco'
    }
    #swagger.responses[201] = {
      description: 'Cadastro realizado com sucesso'
    }
    #swagger.responses[500] = {
      description: 'Desculpe, tivemos um problema com a requisição'
    }
    */
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
