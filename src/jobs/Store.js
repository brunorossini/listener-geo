const sequelize = require("../config/sequelize");
const queries = require("../queries");
let Position = require("../models/Position");
let TrackerItem = require("../models/TrackerItem");
let vwBuffer = require("../views/Buffer");
let moment = require("moment");

var stan = require("node-nats-streaming").connect("test-cluster", "listener");

let Store = async position => {
  try {
    position.date = position.date;
    let trackerItem = await TrackerItem.findOne({
      where: {
        device_id: position.imei
      }
    });

    if (trackerItem) {
      position.tracker_id = trackerItem.id;

      evt = position.evt;
      position = await Position.create(position);
      let buffer = await vwBuffer.findOne({
        where: { tracker_id: trackerItem.id }
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
    } else {
      console.log("DISPOSITIVO SEM ITEM VINCULADO: ", position.imei);
      await Position.create(position);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = Store;
