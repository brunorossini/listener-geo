const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

class Position extends Sequelize.Model {}

Position.init(
  {
    // id: {
    //   allowNull: false,
    //   primaryKey: true,
    //   type: Sequelize.UUID,
    //   defaultValue: Sequelize.UUIDV4
    // },
    header: Sequelize.STRING,
    imei: Sequelize.STRING,
    // device_model: Sequelize.STRING,
    // firmware: Sequelize.STRING,
    date: Sequelize.DATE,
    // date: Sequelize.DATEONLY,
    // time: Sequelize.TIME,
    // cell: Sequelize.STRING,
    lat: Sequelize.STRING,
    lng: Sequelize.STRING,
    speed: Sequelize.SMALLINT,
    angle: Sequelize.SMALLINT,
    altitude: Sequelize.SMALLINT,
    satt: Sequelize.INTEGER,
    // gps_fix: Sequelize.INTEGER,
    // distance: Sequelize.FLOAT,
    power_voltage: Sequelize.DOUBLE,
    device_status: Sequelize.STRING,
    ignition: Sequelize.BOOLEAN,
    input1: Sequelize.BOOLEAN,
    input2: Sequelize.BOOLEAN,
    input3: Sequelize.BOOLEAN,
    input4: Sequelize.BOOLEAN,
    input5: Sequelize.BOOLEAN,
    input6: Sequelize.BOOLEAN,
    output1: Sequelize.BOOLEAN,
    output2: Sequelize.BOOLEAN,
    output3: Sequelize.BOOLEAN,
    output4: Sequelize.BOOLEAN,
    output5: Sequelize.BOOLEAN,
    output6: Sequelize.BOOLEAN,
    // mode: Sequelize.STRING,
    // message_number: Sequelize.STRING,
    odometer: Sequelize.FLOAT,
    battery_voltage: Sequelize.FLOAT,
    // msg_type: Sequelize.STRING,
    rpm: Sequelize.FLOAT,
    driver_id: Sequelize.STRING,
    driver_registred: Sequelize.STRING,
    // cell_id: Sequelize.STRING,
    // mcc: Sequelize.STRING,
    // mnc: Sequelize.STRING,
    // rx_lvl: Sequelize.STRING,
    // lac: Sequelize.STRING,
    // tm_adv: Sequelize.STRING,
    // gps_on_off: Sequelize.STRING,
    tracker_id: Sequelize.STRING,
    ignition_duration: Sequelize.INTEGER,
    sleep_mode: Sequelize.BOOLEAN,
    altitude: Sequelize.STRING,
    data: Sequelize.STRING
  },
  { sequelize, modelName: "position", timestamps: false }
);

module.exports = Position;
