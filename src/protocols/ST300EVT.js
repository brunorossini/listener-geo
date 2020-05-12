const moment = require("moment");

module.exports = (data) => {
  return {
    header: data[0],
    imei: data[1],
    device_model: data[2],
    firmware: data[3],
    date: moment.utc(`${data[4]} ${data[5]}`, "YYYYMMDD HH:mm:ss"),
    // date: moment(data[4], "YYYYMMDD").format("YYYY-MM-DD"),
    // time: data[5],
    cell: data[6],
    lat: data[7],
    lng: data[8],
    speed: parseInt(data[9]),
    angle: parseInt(data[10]),
    satt: data[11],
    gps_fix: data[12],
    h_meter: data[17],
    power_voltage: data[14],
    ignition: data[15][0],
    input1: data[15][1],
    input2: data[15][2],
    input3: data[15][3],
    output1: data[15][4],
    output2: data[15][5],
    event_id: data[16],
    odometer: data[13],
    battery_voltage: data[18],
    msg_type: data[19],
    rpm: data[20],
    driver_id: data[21],
    driver_registred: data[23],
    cell_id: data[24],
    mcc: data[25],
    mnc: data[26],
    rx_lvl: data[27],
    lac: data[28],
    tm_adv: data[29],
    gps_on_off: data[30],
  };
};
