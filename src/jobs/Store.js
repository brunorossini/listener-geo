const sequelize = require("../config/sequelize");
const queries = require("../queries");
let Position = require("../models/Position");
let Device = require("../models/Device");
let TrackerItem = require("../models/TrackerItem");
let vwBuffer = require("../views/Buffer");
let moment = require("moment");

var stan = require("node-nats-streaming").connect("test-cluster", "listener");

let Store = async (position, io) => {
  try {
    const existDevice = await Device.findOne({
      where: {
        imei: position.imei,
      },
    });

    if (!existDevice) await Device.create({ imei: position.imei });

    position.date = position.date;
    let trackerItem = await TrackerItem.findOne({
      where: {
        device_id: position.imei,
      },
    });

    if (trackerItem) {
      position.tracker_id = trackerItem.id;

      evt = position.evt;
      position = await Position.create(position);
      let buffer = await vwBuffer.findOne({
        where: { tracker_id: trackerItem.id },
      });

      let diff = moment().diff(moment(buffer.date), "minutes");
      if (diff >= 10) buffer.status = "DISCONNECTED";
      else if (diff < 10 && buffer.ignition && buffer.speed <= buffer.speed_max)
        buffer.status = "ON";
      else if (diff < 10 && buffer.ignition && buffer.speed > buffer.speed_max)
        buffer.status = "DANGER";
      else if (diff < 10 && !buffer.ignition) buffer.status = "OFF";

      stan.publish("position", JSON.stringify({ position, trackerItem, evt }));
      stan.publish("buffer", JSON.stringify(buffer));

      sequelize.query(queries.rulesSocket(buffer.tracker_id), (err, result) => {
        if (err) {
          console.log(err);
        } else {
          result.rows.map((row) => {
            io.of(`/buffer:${row.user_id}`).on("connection", (socket) => {
              socket.emit("position", buffer);
            });
          });
        }
      });
    } else {
      await Position.create(position);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = Store;
