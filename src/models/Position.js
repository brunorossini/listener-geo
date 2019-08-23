const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");
const uuid = require("uuid/v4");

class Position extends Sequelize.Model {}

Position.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: uuid()
    },
    header: Sequelize.STRING,
    imei: Sequelize.STRING,
    device_model: Sequelize.STRING,
    firmware: Sequelize.STRING,
    date: Sequelize.DATEONLY,
    time: Sequelize.TIME,
    cell: Sequelize.STRING,
    lat: Sequelize.STRING,
    lng: Sequelize.STRING,
    speed: Sequelize.FLOAT,
    angle: Sequelize.FLOAT,
    satt: Sequelize.INTEGER,
    gps_fix: Sequelize.INTEGER,
    distance: Sequelize.FLOAT,
    power_voltage: Sequelize.FLOAT,
    device_status: Sequelize.STRING,
    ignition: Sequelize.BOOLEAN,
    input1: Sequelize.BOOLEAN,
    input2: Sequelize.BOOLEAN,
    input3: Sequelize.BOOLEAN,
    output1: Sequelize.BOOLEAN,
    output2: Sequelize.BOOLEAN,
    mode: Sequelize.STRING,
    message_number: Sequelize.STRING,
    odometer: Sequelize.FLOAT,
    battery_voltage: Sequelize.FLOAT,
    msg_type: Sequelize.STRING,
    rpm: Sequelize.FLOAT,
    driver_id: Sequelize.STRING,
    driver_registred: Sequelize.STRING,
    cell_id: Sequelize.STRING,
    mcc: Sequelize.STRING,
    mnc: Sequelize.STRING,
    rx_lvl: Sequelize.STRING,
    lac: Sequelize.STRING,
    tm_adv: Sequelize.STRING,
    gps_on_off: Sequelize.STRING,
    tracker_id: Sequelize.STRING,
    ignition_duration: Sequelize.INTEGER,
    sleep_mode: Sequelize.BOOLEAN
  },
  { sequelize, modelName: "position", timestamps: false }
);

module.exports = Position;
