let kafka = require("../services/kafka");
let Position = require("../models/Position");
let TrackerItem = require("../models/TrackerItem");

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
      // console.log(position);
      // position = await new Position(position);
      position = await Position.create(position);
    } catch (error) {
      console.log(error);
    }
    kafka.sendMessage(JSON.stringify({ position, trackerItem }));
  } else {
    console.log("DISPOSITIVO SEM ITEM VINCULADO: ", position.imei);
    await Position.create(position);
  }
};

module.exports = Store;
