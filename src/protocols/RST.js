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
    odometer: data[24],

    device_status: data[15],
    ignition: data[15][0],
    input1: data[15][1],
    input2: data[15][2],
    input3: data[15][3],
    output1: data[15][4],
    output2: data[15][5],
    mode: data[16],
    message_number: data[17],
    msg_type: data[20],
    rpm: data[21],
    driver_id: data[22],
    driver_registred: data[23],
    cell_id: data[24],
    mcc: data[25],
    mnc: data[26],
    rx_lvl: data[27],
    lac: data[28],
    tm_adv: data[29],
    gps_on_off: data[30]
  };
};
