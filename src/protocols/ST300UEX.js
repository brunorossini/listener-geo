const moment = require("moment");

module.exports = data => {
  return {
    header: data[0],
    imei: data[1],
    device_model: data[2],
    firmware: data[3],
    date: moment(`${data[4]} ${data[5]}`, "YYYYMMDD HH:mm:ss"),
    // date: moment(data[4], "YYYYMMDD").format("YYYY-MM-DD"),
    // time: data[5],
    cell: data[6],
    lat: data[7],
    lng: data[8],
    speed: data[9],
    angle: data[10],
    satt: data[11],
    gps_fix: data[12],
    distance: data[13],
    power_voltage: data[14],
    ignition: data[15][0],
    input1: data[15][1],
    input2: data[15][2],
    input3: data[15][3],
    output1: data[15][4],
    output2: data[15][5],
    lenght: data[16],
    data: data[17],
    checksum: data[18],
    odometer: data[19],
    battery_voltage: data[20],
    msg_type: data[21]
  };
};
