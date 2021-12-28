const fetch = require('node-fetch');

const buscarCEP = async (numCEP) => {
  const url = `https://viacep.com.br/ws/${numCEP}/json/`;

  const dados = await fetch(url);
  const endereco = await dados.json();

  return endereco;
};

const validarCep = (cep) => {
  // obtém somente os números através da expressão regular
  const cepReplace = cep.replace(/\D/gm, '');
  // expressão regular para validar o cep
  const regEx = /^[0-9]{8}$/;
  // verifica se o cep está no formato válido
  if (regEx.test(cepReplace)) {
    return buscarCEP(cep);
  }
  return console.log('CEP inválido');
};

module.exports = validarCep;