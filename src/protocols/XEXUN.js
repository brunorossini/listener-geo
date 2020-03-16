const moment = require("moment");

module.exports = async data => {
  return {
    imei: data[17].split(":")[1],
    device_model: "TK103-2",
    date: moment.utc(`${data[11]} ${data[3]}`, "DDMMYY HHmmss"),
    lat:
      -1 *
      (
        Number(data[5].substr(0, 2)) +
        data[5].substr(2, data[5].length) / 60
      ).toFixed(6),
    lng:
      -1 *
      (
        Number(data[7].substr(0, 3)) +
        data[7].substr(3, data[7].length) / 60
      ).toFixed(6),
    speed: parseInt(data[9] * 1.852),
    angle: parseInt(data[10]),
    power_voltage: parseFloat(data[21] == 0 ? 0 : 12),
    ignition: data[16] == "ACC OFF" ? false : true
  };
};
