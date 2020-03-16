const moment = require("moment");

module.exports = async data => {
  return {
    imei: data[17].split(":")[1],
    device_model: "TK103-2",
    // firmware: data[3],
    date: moment.utc(`${data[11]} ${data[3]}`, "DDMMYY HHmmss"),
    // date: moment(data[4], "YYYYMMDD").format("YYYY-MM-DD"),
    // time: data[5],
    // cell: data[6],
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
    // satt: data[19],
    // gps_fix: data[12],
    // distance: data[13],
    power_voltage: parseFloat(data[21] == 0 ? 0 : 12),
    // device_status: data[15],
    ignition: data[16] == "ACC OFF" ? false : true
    // input1: data[15][1],
    // input2: data[15][2],
    // input3: data[15][3],
    // output1: data[15][4],
    // output2: data[15][5],
    // mode: data[16],
    // message_number: data[17],
    // odometer: data[18],
    // battery_voltage: data[21].split(":")[1]
    // msg_type: data[20],
    // rpm: data[21],
    // driver_id: data[22],
    // driver_registred: data[23],
    // cell_id: data[24],
    // mcc: data[25],
    // mnc: data[26],
    // rx_lvl: data[27],
    // lac: data[28],
    // tm_adv: data[29],
    // gps_on_off: data[30]
  };
};
