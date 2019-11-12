const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

class TrackerItem extends Sequelize.Model {}

TrackerItem.init(
  {
    label: Sequelize.STRING,
    type: Sequelize.STRING,
    active: Sequelize.BOOLEAN,
    brand: Sequelize.STRING,
    model: Sequelize.STRING,
    color: Sequelize.STRING,
    year: Sequelize.STRING,
    plate: Sequelize.STRING,
    chassis: Sequelize.STRING,
    hour_meter: Sequelize.BOOLEAN,
    speed_max: Sequelize.FLOAT,
    device_id: Sequelize.STRING,
    driving_time_start: Sequelize.TIME,
    driving_time_end: Sequelize.TIME,
    alert_speed: Sequelize.BOOLEAN,
    alert_driving: Sequelize.BOOLEAN,
    client_id: Sequelize.INTEGER
  },
  { sequelize, modelName: "trackerItem", timestamps: false }
);

module.exports = TrackerItem;
