const moment = require("moment");

module.exports = data => {
  return {
    header: data[0],
    firmware: data[1],
    imei: data[2],
    device_model: data[3],
    power_voltage: parseFloat(data[4]) / 1000,
    report_id: data[5],
    // number: data[6],
    satt: data[7],
    speed: data[8],
    angle: data[9],
    altitude: data[10],
    lng: data[11],
    lat: data[12],
    date: moment(data[13], "YYYYMMDDHHmmss")
      .format("YYYY-MM-DD")
      .toString(),
    time: moment(data[13], "YYYYMMDDHHmmss").format("HH:mm:ss"),
    mcc: data[14],
    mcn: data[15],
    lac: data[16],
    cell_id: data[17],
    // field18 reserved
    odometer: parseFloat(data[19]),
    hour_meter: data[20],
    // field21 reserved
    // field22 reserved
    battery_voltage: data[23],
    device_status: data[24],
    ignition: data[24][0] == "2" ? true : false,
    input1:
      data[24].substring(2, 4) == "02" || data[24].substring(2, 4) == "03"
        ? true
        : false,
    output1:
      data[24].substring(4, 6) == "01" || data[24].substring(4, 6) == "03"
        ? true
        : false,
    output2:
      data[24].substring(4, 6) == "02" || data[24].substring(4, 6) == "03"
        ? true
        : false,
    // field25 reserved
    // field26 reserved
    // field27 reserved
    send_time: data[28],
    count_number: data[29]
  };
};
