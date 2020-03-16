const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

class Type extends Sequelize.Model { }

Type.init(
  {
    name: { type: Sequelize.STRING, allowNull: true },
    image: { type: Sequelize.STRING, allowNull: true }
  },
  { sequelize, modelName: "type", timestamps: false }
);

module.exports = Type;
