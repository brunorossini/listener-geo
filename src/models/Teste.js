const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

class Teste extends Sequelize.Model {}

Teste.init(
  {
    hora: Sequelize.DATE
  },
  { sequelize, modelName: "teste", timestamps: false }
);

module.exports = Teste;
