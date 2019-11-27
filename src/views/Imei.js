const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const Imei = sequelize.define("vw_devices", {
  imei: Sequelize.STRING
});

Imei.removeAttribute("id");
Imei.removeAttribute("createdAt");
Imei.removeAttribute("updatedAt");

module.exports = Imei;
