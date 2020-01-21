const moment = require("moment");

module.exports = data => {
  return {
    header: data[0],
    device_model: data[2],
    firmware: data[3],
    imei: data[4],
    date: moment.utc(data[7], "DD-MM-YYYY HH:mm:ss"),
    // date: moment(data[4], "YYYYMMDD").format("YYYY-MM-DD"),
    // time: data[5],
    // cell: data[6],
    lat: data[9],
    lng: data[10],
    speed: parseInt(data[11]),
    angle: parseInt(data[12]),
    // gps_fix: data[14],
    satt: data[15],

    // distance: data[13],
    power_voltage: parseFloat(data[22]),
    battery_voltage: data[23],
    odometer: data[24]
  };
};
