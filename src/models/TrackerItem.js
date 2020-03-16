const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");
const Client = require("../models/Client");
const Device = require("../models/Device");
const Type = require("../models/Type");

class TrackerItem extends Sequelize.Model { }

TrackerItem.init(
  {
    label: { type: Sequelize.STRING, allowNull: false },
    type_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Type,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    active: { type: Sequelize.BOOLEAN, allowNull: true, defaultValue: true },
    brand: { type: Sequelize.STRING, allowNull: true },
    model: { type: Sequelize.STRING, allowNull: true },
    color: { type: Sequelize.STRING, allowNull: true },
    year: { type: Sequelize.STRING, allowNull: true },
    plate: { type: Sequelize.STRING, allowNull: false },
    chassis: { type: Sequelize.STRING, allowNull: true },
    hour_meter: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    speed_max: { type: Sequelize.FLOAT, allowNull: false },
    device_id: {
      type: Sequelize.STRING,
      allowNull: true,
      references: {
        model: Device,
        key: "imei"
        // deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    driving_time_start: { type: Sequelize.TIME, allowNull: false },
    driving_time_end: { type: Sequelize.TIME, allowNull: false },
    alert_speed: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    alert_driving: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    client_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Client,
        key: "id",
        deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    weekend: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    fences: { type: Sequelize.JSONB, allowNull: false }
  },
  {
    sequelize,
    modelName: "trackerItem",
    timestamps: false
  }
);

TrackerItem.belongsTo(Type, {
  foreignKey: "type_id"
});

TrackerItem.belongsTo(Client, {
  foreignKey: "client_id"
});

TrackerItem.belongsTo(Device, {
  foreignKey: {
    name: "device_id",
    allowNull: true
  }
});
// TrackerItem.belongsToMany(User, {
//   through: "UserTrackerItem",
//   as: "trackerItems",
//   foreignKey: "tracker_id",
//   otherKey: "user_id"
// });

module.exports = TrackerItem;
