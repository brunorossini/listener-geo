const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

class Device extends Sequelize.Model {}

Device.init(
  {
    imei: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
    phone: { type: Sequelize.STRING, allowNull: true },
    model: { type: Sequelize.STRING, allowNull: true },
    type: { type: Sequelize.STRING, allowNull: true },
    input1: { type: Sequelize.STRING, allowNull: true },
    input2: { type: Sequelize.STRING, allowNull: true },
    input3: { type: Sequelize.STRING, allowNull: true },
    input4: { type: Sequelize.STRING, allowNull: true },
    input5: { type: Sequelize.STRING, allowNull: true },
    input6: { type: Sequelize.STRING, allowNull: true },
    output1: { type: Sequelize.STRING, allowNull: true },
    output2: { type: Sequelize.STRING, allowNull: true },
    output3: { type: Sequelize.STRING, allowNull: true },
    output4: { type: Sequelize.STRING, allowNull: true },
    output5: { type: Sequelize.STRING, allowNull: true },
    output6: { type: Sequelize.STRING, allowNull: true }
  },
  { sequelize, modelName: "device", timestamps: false }
);

// Device.sync({ force: true });

module.exports = Device;
