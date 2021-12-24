const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    // static associate(models) {
    //   Cliente.belongsTo(models.Endereco, {
    //     foreignKey: 'cep', as: 'endereco',
    //   });
    // }
  }
  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    cep: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
  },
    { sequelize, modelName: 'Cliente' });

  return Cliente;
};
