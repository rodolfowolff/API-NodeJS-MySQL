'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: { type: Sequelize.STRING },
      cpf: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      cep: { type: Sequelize.STRING },
      estado: { type: Sequelize.STRING },
      cidade: { type: Sequelize.STRING },
      bairro: { type: Sequelize.STRING },
      logradouro: { type: Sequelize.STRING },
      dataNascimento: { type: Sequelize.DATE }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  }
};