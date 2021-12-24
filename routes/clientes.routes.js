import express from 'express';

import validRegisterCliente from '../middlewares/validRegisterCliente';

const router = express.Router();

router.post('/cadastro', validRegisterCliente);

module.exports = router;
