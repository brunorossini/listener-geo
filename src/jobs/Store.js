let Position = require("../models/Position");
let TrackerItem = require("../models/TrackerItem");
let vwBuffer = require("../views/Buffer");
let moment = require("moment");

var stan = require("node-nats-streaming").connect("test-cluster", "listener");

let Store = async position => {
  try {
    position.date = position.date.subtract({ hours: 3 });
    let trackerItem = await TrackerItem.findOne({
      where: {
        device_id: position.imei
      }
    });

    if (trackerItem) {
      position.tracker_id = trackerItem.id;
      evt = position.evt;
      // Position.sync({ force: true });
      try {
        position = await Position.create(position);
      } catch (error) {
        console.log(error);
      }

      let buffer = await vwBuffer.findOne({
        where: { tracker_id: trackerItem.id }
      });
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
