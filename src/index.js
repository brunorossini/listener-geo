require("dotenv").config();
let listener = require("./services/listener");
let listenerUDP = require("./services/udp");

const sequelize = require("../src/config/sequelize");
const queries = require("../src/queries");

sequelize
  .query(queries.findLocation(-20.351288, -40.655862), {
    type: sequelize.QueryTypes.SELECT
  })
  .then(result => console.log(result[0].address));

listener();
// listenerUDP();
