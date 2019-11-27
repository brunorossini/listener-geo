const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

class Client extends Sequelize.Model {}

Client.init(
  {
    name: { type: Sequelize.STRING, allowNull: false },
    phone: { type: Sequelize.STRING, allowNull: false },
    address: { type: Sequelize.STRING, allowNull: true },
    city: { type: Sequelize.STRING, allowNull: true },
    state: { type: Sequelize.STRING, allowNull: true },
    zip: { type: Sequelize.STRING, allowNull: true },
    document: { type: Sequelize.STRING, allowNull: false },
    status: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: true }
  },
  { sequelize, modelName: "client", timestamps: false }
);

module.exports = Client;
