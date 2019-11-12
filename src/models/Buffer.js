const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const vwBuffer = sequelize.define(
  "vw_buffer",
  {
    tracker_id: Sequelize.INTEGER,
    header: Sequelize.STRING,
    imei: Sequelize.STRING,
    date: Sequelize.DATE,
    // date: Sequelize.DATEONLY,
    // time: Sequelize.TIME,
    lat: Sequelize.STRING,
    lng: Sequelize.STRING,
    speed: Sequelize.FLOAT,
    angle: Sequelize.FLOAT,
    power_voltage: Sequelize.FLOAT,
    ignition: Sequelize.BOOLEAN,
    input1: Sequelize.BOOLEAN,
    input2: Sequelize.BOOLEAN,
    input3: Sequelize.BOOLEAN,
    output1: Sequelize.BOOLEAN,
    output2: Sequelize.BOOLEAN,
    odometer: Sequelize.FLOAT,
    battery_voltage: Sequelize.FLOAT,
    ignition_duration: Sequelize.INTEGER,
    sleep_mode: Sequelize.BOOLEAN,
    label: Sequelize.STRING,
    type: Sequelize.STRING,
    // status: Sequelize.BOOLEAN,
    // label_icon: Sequelize.STRING,
    brand: Sequelize.STRING,
    model: Sequelize.STRING,
    color: Sequelize.STRING,
    year: Sequelize.STRING,
    chassis: Sequelize.STRING,
    last_time_on: Sequelize.STRING,
    speed_max: Sequelize.INTEGER
  },
  {
    timestamps: false,
    freezeTableName: true,
    tableName: "vw_buffer"
  }
);

vwBuffer.removeAttribute("id");
vwBuffer.removeAttribute("createdAt");
vwBuffer.removeAttribute("updatedAt");

module.exports = vwBuffer;
