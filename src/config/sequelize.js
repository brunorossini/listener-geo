const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  logging: false,
  dialectOptions: {
    useUTC: true, //for reading from database
  },
  pool: {
    max: 50,
    min: 0,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
