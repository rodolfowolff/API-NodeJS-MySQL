const { check } = require('express-validator');

const validRegisterCliente = [
  check('nome')
    .notEmpty()
    .withMessage('O nome não pode ser vazio')
    .bail()
    .isLength({ min: 3 })
    .withMessage('O nome deve ter no mínimo 3 caracteres'),
  check('cpf')
    .notEmpty()
    .withMessage('O cpf não pode ser vazio')
    .bail()
    .isLength({ min: 8, max: 14 })
    .withMessage('O número de caracterese do cpf deve estar entre 8 e 14'),
  check('email')
    .notEmpty()
    .withMessage('O email não pode ser vazio')
    .bail()
    .isEmail()
    .withMessage('O email deve ser válido'),
  check('cep')
    .notEmpty()
    .withMessage('O cep não pode ser vazio')
    .bail()
    .isLength({ min: 8, max: 14 })
    .withMessage('O número de caracterese do cep deve estar entre 8 e 14'),
  check('dataNascimento')
    .notEmpty()
    .withMessage('A data de nascimento não pode ser vazio')
    .bail()
    .isISO8601()
    .withMessage('A data de nascimento deve ser válida'),
];

module.exports = { validRegisterCliente };
