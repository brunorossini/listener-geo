let rabbitmq = require("../services/rabbitmq");
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
    position = await Position.create(position);

    kafka.sendMessage(JSON.stringify({ position, trackerItem }));
    // rabbitmq("analyst", JSON.stringify({ position, trackerItem }));
  } else {
    console.log("DISPOSITIVO SEM ITEM VINCULADO: ", position.imei);
  }
};

module.exports = Store;
