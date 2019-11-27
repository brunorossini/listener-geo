const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Client = require("../models/Client");

class User extends Sequelize.Model {}

User.init(
  {
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, unique: true, allowNull: false },
    cpf: { type: Sequelize.STRING, unique: true, allowNull: false },
    image: { type: Sequelize.STRING, allowNull: true },
    password: { type: Sequelize.STRING, allowNull: true },
    active: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: true },
    admin: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: false },
    phone: { type: Sequelize.STRING, allowNull: false },
    telegram: { type: Sequelize.STRING, allowNull: true },
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Client,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    }
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
    hooks: {
      beforeCreate: function(user) {
        if (user.password)
          user.password = bcrypt.hashSync(user.password, saltRounds);
      },
      beforeUpdate: function(user) {
        if (user.password)
          user.password = bcrypt.hashSync(user.password, saltRounds);
      }
    }
  }
);

User.prototype.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.getDataValue("password"));
};

User.belongsTo(Client, {
  foreignKey: "client_id"
});

module.exports = User;
