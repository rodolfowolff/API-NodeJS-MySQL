const express = require('express');

const router = express.Router();

const ClienteController = require('../controllers/clientes.controller');
const { validRegisterCliente } = require('../middlewares/validRegisterCliente');

router.get('/:cpf', ClienteController.getByCpf);
router.post('/cadastro', validRegisterCliente, ClienteController.register);

module.exports = router;
