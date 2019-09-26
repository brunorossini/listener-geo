let Position = require("../models/Position");
let TrackerItem = require("../models/TrackerItem");

var stan = require("node-nats-streaming").connect("test-cluster", "listener");

let Store = async position => {
  let trackerItem = await TrackerItem.findOne({
    where: {
      device_id: position.imei
    }
  });

  if (trackerItem) {
    position.tracker_id = trackerItem.id;
    // Position.sync({ force: true });
    try {
      position = await Position.create(position);
    } catch (error) {
      console.log(error);
    }
    stan.publish("position", JSON.stringify({ position, trackerItem }));
  } else {
    console.log("DISPOSITIVO SEM ITEM VINCULADO: ", position.imei);
    await Position.create(position);
  }
};

module.exports = Store;
